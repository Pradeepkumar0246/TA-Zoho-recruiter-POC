import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ShortlistService } from '../../services/shortlist.service';

import { AppShellComponent } from '../../components/app-shell/app-shell.component';
import { CandidateListItem } from '../../models/candidate.models';
import { CandidateService } from '../../services/candidate.service';
import { JobDescriptionListItem } from '../../models/job-description.models';
import { JobDescriptionService } from '../../services/job-description.service';
import { sanitizeCandidateName, sanitizeDisplayText, summarizeSkills } from '../../utils/display-format';

type RankedCandidate = CandidateListItem & {
  computed_match_percentage: number;
  isSelected?: boolean;
};

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, RouterLink, AppShellComponent],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css',
})
export class RankingComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  candidates: RankedCandidate[] = [];
  jobDescriptions: JobDescriptionListItem[] = [];
  selectedJdId: string | null = null;
  loading = false;
  saving = false;
  selectedCandidateIds: Set<string> = new Set();

  constructor(
    private readonly candidateService: CandidateService,
    private readonly jobDescriptionService: JobDescriptionService,
    private readonly authService: AuthService,
    private readonly shortlistService: ShortlistService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.jobDescriptionService
      .listJobDescriptions()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => {
        this.jobDescriptions = items;
        if (items.length > 0) {
          this.selectedJdId = items[0].id;
          this.loadRankedCandidates();
        } else {
          this.candidates = [];
        }
      });
  }

  onLogout(): void {
    this.authService.logoutFromServer().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  onJdChange(jdId: string): void {
    this.selectedJdId = jdId || null;
    this.selectedCandidateIds.clear();
    this.loadRankedCandidates();
  }

  toggleCandidateSelection(candidateId: string): void {
    if (this.selectedCandidateIds.has(candidateId)) {
      this.selectedCandidateIds.delete(candidateId);
    } else {
      this.selectedCandidateIds.add(candidateId);
    }
    this.updateCandidateSelection();
  }

  toggleSelectAll(): void {
    if (this.selectedCandidateIds.size === this.candidates.length) {
      this.selectedCandidateIds.clear();
    } else {
      this.candidates.forEach((candidate) => this.selectedCandidateIds.add(candidate.id));
    }
    this.updateCandidateSelection();
  }

  isAllSelected(): boolean {
    return this.candidates.length > 0 && this.selectedCandidateIds.size === this.candidates.length;
  }

  isIndeterminate(): boolean {
    return this.selectedCandidateIds.size > 0 && this.selectedCandidateIds.size < this.candidates.length;
  }

  getSelectionCount(): number {
    return this.selectedCandidateIds.size;
  }

  async saveShortlist(): Promise<void> {
    if (!this.selectedJdId || this.selectedCandidateIds.size === 0) {
      return;
    }

    this.saving = true;
    try {
      const shortlistResponse = await this.shortlistService
        .createShortlist(this.selectedJdId, Array.from(this.selectedCandidateIds))
        .pipe(takeUntilDestroyed(this.destroyRef))
        .toPromise();

      if (shortlistResponse) {
        // Get the current JD info for metadata
        const currentJd = this.selectedJd;
        
        // Download the Excel file
        await this.shortlistService
          .downloadShortlistAsExcel(shortlistResponse.id)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .toPromise();

        // Navigate to export success page with metadata
        this.router.navigate(['/export-success'], {
          state: {
            metadata: {
              filename: this._generateFilename(currentJd?.title || 'Shortlist'),
              candidate_count: this.selectedCandidateIds.size,
              jd_title: currentJd?.title || 'Unknown',
              generated_at: new Date().toLocaleString(),
            },
          },
        });

        this.selectedCandidateIds.clear();
        this.updateCandidateSelection();
      }
    } finally {
      this.saving = false;
    }
  }

  rank(index: number): string {
    return `#${index + 1}`;
  }

  matchLabel(candidate: RankedCandidate): string {
    return `${Math.round(candidate.computed_match_percentage)}%`;
  }

  safeName(value: string | null | undefined): string {
    return sanitizeCandidateName(value);
  }

  safeText(value: string | null | undefined): string {
    return sanitizeDisplayText(value);
  }

  skillSummary(candidate: CandidateListItem): string {
    return summarizeSkills(candidate.skills);
  }

  get selectedJd(): JobDescriptionListItem | null {
    if (!this.selectedJdId) {
      return null;
    }
    return this.jobDescriptions.find((item) => item.id === this.selectedJdId) ?? null;
  }

  get selectedJdSkills(): string[] {
    const jd = this.selectedJd;
    if (!jd || !Array.isArray(jd.required_skills)) {
      return [];
    }
    return jd.required_skills.filter((item) => item && item.trim().length > 0);
  }

  skillWeightPercent(): number {
    const count = this.selectedJdSkills.length;
    if (!count) {
      return 0;
    }
    return Math.round((100 / count) * 10) / 10;
  }

  private updateCandidateSelection(): void {
    this.candidates = this.candidates.map((candidate) => ({
      ...candidate,
      isSelected: this.selectedCandidateIds.has(candidate.id),
    }));
  }

  private _generateFilename(jdTitle: string): string {
    const sanitized = jdTitle.replace(/ /g, '_').replace(/\//g, '_');
    return `${sanitized}_Shortlist.xlsx`;
  }

  private loadRankedCandidates(): void {
    if (!this.selectedJdId) {
      this.candidates = [];
      return;
    }

    this.loading = true;
    this.candidateService
      .loadCandidates({
        page: 1,
        pageSize: 100,
        sortBy: 'full_name',
        sortOrder: 'asc',
        jdId: this.selectedJdId,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        const requiredSkills = this.selectedJdSkills.map((item) => item.trim().toLowerCase()).filter((item) => item.length > 0);
        this.candidates = response.items
          .map((candidate) => ({
            ...candidate,
            computed_match_percentage: this.computeMatchPercentage(candidate, requiredSkills),
            isSelected: this.selectedCandidateIds.has(candidate.id),
          }))
          .sort((a, b) => {
            if (b.computed_match_percentage !== a.computed_match_percentage) {
              return b.computed_match_percentage - a.computed_match_percentage;
            }
            return (b.total_experience_years ?? 0) - (a.total_experience_years ?? 0);
          });
        this.loading = false;
      });
  }

  private computeMatchPercentage(candidate: CandidateListItem, requiredSkills: string[]): number {
    if (!requiredSkills.length) {
      return 0;
    }

    const candidateSkills = (candidate.skills ?? []).map((item) => String(item).trim().toLowerCase()).filter((item) => item.length > 0);
    if (!candidateSkills.length) {
      return 0;
    }

    let matches = 0;
    for (const jdSkill of requiredSkills) {
      const found = candidateSkills.some((skill) => skill.includes(jdSkill) || jdSkill.includes(skill));
      if (found) {
        matches += 1;
      }
    }

    return (matches / requiredSkills.length) * 100;
  }
}
