import { of } from 'rxjs';

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CandidateService } from '../../services/candidate.service';
import { IntegrationService } from '../../services/integration.service';
import { JobDescriptionService } from '../../services/job-description.service';
import { CandidatesComponent } from './candidates.component';

describe('CandidatesComponent', () => {
  let fixture: ComponentFixture<CandidatesComponent>;
  let component: CandidatesComponent;
  let candidateService: jasmine.SpyObj<CandidateService>;
  let integrationService: jasmine.SpyObj<IntegrationService>;
  let jobDescriptionService: jasmine.SpyObj<JobDescriptionService>;

  const responseForPage = (page: number) => ({
    items: [
      {
        id: `11111111-1111-1111-1111-11111111111${page}`,
        zoho_candidate_id: `z-${page}`,
        full_name: page === 1 ? 'Arjun Kumar' : 'Priya Sharma',
        skills: ['Java', 'Spring Boot'],
        total_experience_years: 6,
        current_location: 'Bengaluru',
        current_company: 'TechNova Solutions',
        notice_period_days: 30,
        status: 'active',
        match_percentage: 92,
        updated_at: '2026-07-28T10:30:00Z',
      },
    ],
    page,
    page_size: 10,
    total_items: 2,
    total_pages: 2,
    q: null,
    sort_by: 'full_name',
    sort_order: 'asc' as const,
  });

  beforeEach(async () => {
    candidateService = jasmine.createSpyObj<CandidateService>('CandidateService', ['loadCandidates']);
    integrationService = jasmine.createSpyObj<IntegrationService>('IntegrationService', ['pollZohoStatus']);
    jobDescriptionService = jasmine.createSpyObj<JobDescriptionService>('JobDescriptionService', ['listJobDescriptions']);

    Object.defineProperty(candidateService, 'loading$', {
      get: () => of(false),
    });
    Object.defineProperty(candidateService, 'error$', {
      get: () => of(null),
    });

    candidateService.loadCandidates.and.callFake((query) => {
      return of(responseForPage(query.page));
    });

    integrationService.pollZohoStatus.and.returnValue(
      of({
        integration: 'Zoho Recruit',
        connection_state: 'connected',
        status: 'healthy',
        access_level: 'read_only',
        sync_type: 'manual',
        last_successful_sync_at: '2026-07-28T10:30:00Z',
        last_checked_at: new Date().toISOString(),
      })
    );

    jobDescriptionService.listJobDescriptions.and.returnValue(
      of([
        { id: 'jd-1', jd_code: 'JD-2026-014', title: 'Java Backend Developer' },
        { id: 'jd-2', jd_code: 'JD-2026-101', title: 'Python API Developer' },
      ])
    );

    await TestBed.configureTestingModule({
      imports: [CandidatesComponent, RouterTestingModule],
      providers: [
        { provide: CandidateService, useValue: candidateService },
        { provide: IntegrationService, useValue: integrationService },
        { provide: JobDescriptionService, useValue: jobDescriptionService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should debounce search input before reloading candidates', fakeAsync(() => {
    expect(candidateService.loadCandidates).toHaveBeenCalledWith(
      jasmine.objectContaining({ page: 1, pageSize: 10, sortBy: 'full_name', sortOrder: 'asc' })
    );

    candidateService.loadCandidates.calls.reset();
    component.searchControl.setValue('  python  ');
    tick(299);
    expect(candidateService.loadCandidates).not.toHaveBeenCalled();

    tick(1);
    expect(candidateService.loadCandidates).toHaveBeenCalledWith(
      jasmine.objectContaining({ q: 'python', page: 1, pageSize: 10 })
    );
  }));

  it('should submit search immediately and navigate pages', () => {
    candidateService.loadCandidates.calls.reset();
    component.searchControl.setValue('TechNova', { emitEvent: false });
    component.onSearchSubmit();

    expect(candidateService.loadCandidates).toHaveBeenCalledWith(
      jasmine.objectContaining({ q: 'TechNova', page: 1, pageSize: 10, sortBy: 'full_name', sortOrder: 'asc' })
    );

    candidateService.loadCandidates.calls.reset();
    component.onPageChange(2);

    expect(candidateService.loadCandidates).toHaveBeenCalledWith(
      jasmine.objectContaining({ page: 2, pageSize: 10, sortBy: 'full_name', sortOrder: 'asc' })
    );
  });

  it('should toggle filter panel visibility', () => {
    expect(component.isFilterPanelOpen).toBeFalse();

    component.toggleFilters();
    expect(component.isFilterPanelOpen).toBeTrue();

    component.toggleFilters();
    expect(component.isFilterPanelOpen).toBeFalse();
  });

  it('should call API with filter params when apply filters is clicked', () => {
    candidateService.loadCandidates.calls.reset();
    component.basicFilterForm.setValue({
      jdId: 'jd-1',
      skills: 'Java, Spring Boot',
      experienceMin: '4',
      experienceMax: '8',
      location: 'Bengaluru',
      preferredLocation: 'Hyderabad',
      noticePeriodMax: '30',
      status: 'active',
    });

    component.applyFilters();

    expect(candidateService.loadCandidates).toHaveBeenCalledWith(
      jasmine.objectContaining({
        page: 1,
        sortBy: 'full_name',
        sortOrder: 'asc',
        jdId: 'jd-1',
        skills: ['Java', 'Spring Boot'],
        experienceMin: 4,
        experienceMax: 8,
        location: 'Bengaluru',
        preferredLocation: 'Hyderabad',
        noticePeriodMax: 30,
        status: 'active',
      })
    );
    expect(component.activeFilterChips.length).toBeGreaterThan(0);
  });

  it('should prevent apply when min experience exceeds max experience', () => {
    candidateService.loadCandidates.calls.reset();
    component.basicFilterForm.setValue({
      jdId: 'any',
      skills: '',
      experienceMin: '10',
      experienceMax: '4',
      location: '',
      preferredLocation: '',
      noticePeriodMax: '',
      status: 'any',
    });

    component.applyFilters();

    expect(candidateService.loadCandidates).not.toHaveBeenCalled();
    expect(component.filterValidationMessage).toContain('Experience minimum must be less than or equal to experience maximum');
  });
});
