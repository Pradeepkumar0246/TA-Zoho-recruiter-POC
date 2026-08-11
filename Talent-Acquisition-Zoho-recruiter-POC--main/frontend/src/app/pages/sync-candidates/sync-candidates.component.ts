import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, switchMap } from 'rxjs';

import { AuthService } from '../../services/auth.service';

import { AppShellComponent } from '../../components/app-shell/app-shell.component';
import { ZohoIntegrationStatus } from '../../models/integration.models';
import { SyncStatusResponse } from '../../models/sync.models';
import { IntegrationService } from '../../services/integration.service';
import { SyncService } from '../../services/sync.service';

@Component({
  selector: 'app-sync-candidates',
  standalone: true,
  imports: [CommonModule, RouterLink, AppShellComponent],
  templateUrl: './sync-candidates.component.html',
  styleUrl: './sync-candidates.component.css',
})
export class SyncCandidatesComponent {
  private readonly destroyRef = inject(DestroyRef);

  zohoStatus: ZohoIntegrationStatus | null = null;
  lastSyncStatus: SyncStatusResponse | null = null;
  syncInProgress = false;
  syncErrorMessage: string | null = null;

  constructor(
    private readonly router: Router,
    private readonly integrationService: IntegrationService,
    private readonly syncService: SyncService,
    private readonly authService: AuthService
  ) {
    this.integrationService
      .pollZohoStatus()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((status) => {
        this.zohoStatus = status;
      });

    this.syncService.error$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      this.syncErrorMessage = message;
    });
  }

  onLogout(): void {
    this.authService.logoutFromServer().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.router.navigate(['/login']);
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

  onStartSync(): void {
    if (!this.isConnected || this.syncInProgress) {
      return;
    }

    this.syncInProgress = true;
    this.syncErrorMessage = null;

    this.syncService
      .startCandidateSync()
      .pipe(
        switchMap((trigger) => {
          if (!trigger.sync_id) {
            this.syncInProgress = false;
            return EMPTY;
          }
          return this.syncService.trackSyncUntilDone(trigger.sync_id);
        }),
        catchError(() => {
          this.syncInProgress = false;
          this.syncErrorMessage = 'Unable to track candidate sync status. Please try again.';
          return EMPTY;
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((status) => {
        this.lastSyncStatus = status;
        if (status.status === 'running') {
          return;
        }

        this.syncInProgress = false;
        if (status.status === 'completed') {
          void this.router.navigate(['/sync-complete', status.sync_id]);
          return;
        }

        this.syncErrorMessage = this.syncService.buildFriendlyError(status);
      });
  }
}
