from __future__ import annotations

from dataclasses import dataclass
from uuid import UUID

from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session

from app.models.activity_log import ActivityLog
from app.models.candidate import Candidate
from app.models.saved_filter import SavedFilter
from app.models.shortlist import Shortlist
from app.models.shortlist_candidate import ShortlistCandidate
from app.repositories.integration_settings_repository import IntegrationSettingsRepository
from app.schemas.dashboard import DashboardActivityItemResponse, DashboardRecentActivityResponse, DashboardStatsResponse


@dataclass(slots=True)
class DashboardService:
    session: Session
    integration_settings_repository: IntegrationSettingsRepository

    provider_name: str = "zoho_recruit"

    def get_stats(self, recruiter_id: UUID) -> DashboardStatsResponse:
        total_candidates = self.session.scalar(select(func.count(Candidate.id))) or 0
        saved_filter_count = self.session.scalar(
            select(func.count(SavedFilter.id)).where(SavedFilter.recruiter_id == recruiter_id)
        ) or 0
        current_shortlist_size = self._get_current_shortlist_size(recruiter_id)
        integration = self.integration_settings_repository.get_or_create(self.provider_name)

        return DashboardStatsResponse(
            total_candidates=total_candidates,
            last_sync_at=integration.last_successful_sync_at,
            current_shortlist_size=current_shortlist_size,
            saved_filter_count=saved_filter_count,
        )

    def get_recent_activity(self, recruiter_id: UUID, limit: int = 5) -> DashboardRecentActivityResponse:
        statement = (
            select(ActivityLog)
            .where(ActivityLog.actor_id == recruiter_id)
            .order_by(desc(ActivityLog.occurred_at), desc(ActivityLog.id))
            .limit(limit)
        )
        items = [
            DashboardActivityItemResponse(
                id=row.id,
                actor_id=row.actor_id,
                action_type=row.action_type,
                description=row.description,
                occurred_at=row.occurred_at,
            )
            for row in self.session.scalars(statement).all()
        ]
        return DashboardRecentActivityResponse(items=items)

    def _get_current_shortlist_size(self, recruiter_id: UUID) -> int:
        shortlist_id = self.session.scalar(
            select(Shortlist.id)
            .where(Shortlist.recruiter_id == recruiter_id)
            .order_by(desc(Shortlist.created_at), desc(Shortlist.id))
            .limit(1)
        )
        if shortlist_id is None:
            return 0

        return self.session.scalar(
            select(func.count(ShortlistCandidate.candidate_id)).where(ShortlistCandidate.shortlist_id == shortlist_id)
        ) or 0
