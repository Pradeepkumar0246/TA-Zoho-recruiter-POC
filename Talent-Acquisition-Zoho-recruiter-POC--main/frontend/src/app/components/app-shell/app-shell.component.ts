import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent {
  @Input() activeNav: 'dashboard' | 'sync' | 'candidates' | 'filters' | 'ranking' | 'shortlists' | 'duplicates' = 'dashboard';
  @Input() headerContext = 'Dashboard';
  @Input() statusState: 'connected' | 'disconnected' = 'disconnected';
  @Input() recruiterName = 'Recruiter';
  @Input() recruiterInitials = 'RK';

  @Output() logoutRequested = new EventEmitter<void>();

  onLogout(event: Event): void {
    event.preventDefault();
    this.logoutRequested.emit();
  }
}
