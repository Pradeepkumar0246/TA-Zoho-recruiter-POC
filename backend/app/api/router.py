from fastapi import APIRouter

from app.api.auth import auth_router
from app.api.candidates import candidate_router
from app.api.dashboard import dashboard_router
from app.api.duplicates import duplicate_router
from app.api.integrations import integrations_router
from app.api.job_descriptions import job_description_router
from app.api.ranking import ranking_router
from app.api.saved_filters import saved_filter_router
from app.api.shortlists import shortlist_router
from app.api.sync import sync_router

api_router = APIRouter()

api_router.include_router(auth_router, prefix="/auth", tags=["Auth"])
api_router.include_router(candidate_router, prefix="/candidates", tags=["Candidates"])
api_router.include_router(dashboard_router, prefix="/dashboard", tags=["Dashboard"])
api_router.include_router(duplicate_router, prefix="/duplicates", tags=["Duplicates"])
api_router.include_router(integrations_router, prefix="/integrations", tags=["Integrations"])
api_router.include_router(job_description_router, prefix="/job-descriptions", tags=["Job Descriptions"])
api_router.include_router(ranking_router, prefix="/ranking", tags=["Ranking"])
api_router.include_router(saved_filter_router, prefix="/saved-filters", tags=["Saved Filters"])
api_router.include_router(shortlist_router, prefix="/shortlists", tags=["Shortlists"])
api_router.include_router(sync_router, prefix="/sync", tags=["Sync"])


@api_router.get("/status", tags=["Status"])
async def service_status() -> dict[str, str]:
    return {"service": "backend", "status": "running"}
