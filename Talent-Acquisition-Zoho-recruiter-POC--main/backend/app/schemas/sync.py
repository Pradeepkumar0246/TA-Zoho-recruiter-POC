from __future__ import annotations

from datetime import datetime
from uuid import UUID

from pydantic import BaseModel


class CandidateSyncTriggerResponse(BaseModel):
    sync_id: UUID
    status: str


class CandidateSyncStatusResponse(BaseModel):
    sync_id: UUID
    status: str
    started_at: datetime
    completed_at: datetime | None = None
    records_fetched: int
    records_new: int
    records_updated: int
    error_message: str | None = None


class NormalizationExampleResponse(BaseModel):
    field: str
    raw_value: str
    normalized_value: str


class CandidateSyncSummaryResponse(BaseModel):
    sync_id: UUID
    status: str
    started_at: datetime
    completed_at: datetime | None = None
    records_fetched: int
    records_new: int
    records_updated: int
    normalized_records: int
    normalization_examples: list[NormalizationExampleResponse]
    error_message: str | None = None
