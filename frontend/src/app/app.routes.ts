import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DuplicatesComponent } from './pages/duplicates/duplicates.component';
import { ExportSuccessComponent } from './pages/export-success/export-success.component';
import { FiltersComponent } from './pages/filters/filters.component';
import { LoginComponent } from './pages/login/login.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { ShortlistsComponent } from './pages/shortlists/shortlists.component';
import { SyncCandidatesComponent } from './pages/sync-candidates/sync-candidates.component';
import { SyncCompleteComponent } from './pages/sync-complete/sync-complete.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [authGuard],
	},
	{
		path: 'candidates',
		component: CandidatesComponent,
		canActivate: [authGuard],
	},
	{
		path: 'candidates/:id',
		component: CandidateDetailsComponent,
		canActivate: [authGuard],
	},
	{
		path: 'filters',
		component: FiltersComponent,
		canActivate: [authGuard],
	},
	{
		path: 'ranking',
		component: RankingComponent,
		canActivate: [authGuard],
	},
	{
		path: 'shortlists',
		component: ShortlistsComponent,
		canActivate: [authGuard],
	},
	{
		path: 'export-success',
		component: ExportSuccessComponent,
		canActivate: [authGuard],
	},
	{
		path: 'duplicates',
		component: DuplicatesComponent,
		canActivate: [authGuard],
	},
	{
		path: 'sync-candidates',
		component: SyncCandidatesComponent,
		canActivate: [authGuard],
	},
	{
		path: 'sync-complete/:syncId',
		component: SyncCompleteComponent,
		canActivate: [authGuard],
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];
