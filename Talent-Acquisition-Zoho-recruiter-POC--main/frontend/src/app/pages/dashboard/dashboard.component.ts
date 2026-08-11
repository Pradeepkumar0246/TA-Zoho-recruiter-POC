import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AppShellComponent } from '../../components/app-shell/app-shell.component';
import { AuthService } from '../../services/auth.service';
import { DashboardActivityItem, DashboardStats } from '../../models/dashboard.models';
import { DashboardService } from '../../services/dashboard.service';
import { IntegrationService } from '../../services/integration.service';
import { ZohoIntegrationStatus } from '../../models/integration.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, AppShellComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  stats: DashboardStats | null = null;
  recentActivity: DashboardActivityItem[] = [];
  loading = false;
  errorMessage: string | null = null;
  zohoStatus: ZohoIntegrationStatus | null = null;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly integrationService: IntegrationService,
    private readonly dashboardService: DashboardService
  ) {
    this.integrationService
      .pollZohoStatus()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((status) => {
        this.zohoStatus = status;
      });

    this.dashboardService.loading$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((loading) => {
      this.loading = loading;
    });

    this.dashboardService.error$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      this.errorMessage = message;
    });
  }

  ngOnInit(): void {
    this.dashboardService
      .loadDashboardOverview(4)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((overview) => {
        this.stats = overview.stats;
        this.recentActivity = overview.recentActivity;
      });
  }

  get isConnected(): boolean {
    return this.zohoStatus?.connection_state === 'connected';
  }

  get formattedSyncTime(): string {
    if (!this.zohoStatus?.last_successful_sync_at) {
      return 'Not synced yet';
    }

    return new Date(this.zohoStatus.last_successful_sync_at).toLocaleString();
  }

  get formattedLastSyncAt(): string {
    if (!this.stats?.last_sync_at) {
      return 'Not synced yet';
    }

    return new Date(this.stats.last_sync_at).toLocaleString();
  }

  onLogout(): void {
    this.authService.logoutFromServer().subscribe(() => {
      void this.router.navigate(['/login']);
    });
  }
}