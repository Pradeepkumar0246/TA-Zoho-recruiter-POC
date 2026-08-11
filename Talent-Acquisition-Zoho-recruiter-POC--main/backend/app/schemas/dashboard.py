from __future__ import annotations

from datetime import datetime
from uuid import UUID

from pydantic import BaseModel


class DashboardStatsResponse(BaseModel):
    total_candidates: int
    last_sync_at: datetime | None = None
    current_shortlist_size: int
    saved_filter_count: int


class DashboardActivityItemResponse(BaseModel):
    id: UUID
    actor_id: UUID | None = None
    action_type: str
    description: str
    occurred_at: datetime


class DashboardRecentActivityResponse(BaseModel):
    items: list[DashboardActivityItemResponse]
