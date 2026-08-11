export interface DashboardStats {
  total_candidates: number;
  last_sync_at: string | null;
  current_shortlist_size: number;
  saved_filter_count: number;
}

export interface DashboardActivityItem {
  id: string;
  actor_id: string | null;
  action_type: string;
  description: string;
  occurred_at: string;
}

export interface DashboardRecentActivityResponse {
  items: DashboardActivityItem[];
}

export interface DashboardOverview {
  stats: DashboardStats;
  recentActivity: DashboardActivityItem[];
}
