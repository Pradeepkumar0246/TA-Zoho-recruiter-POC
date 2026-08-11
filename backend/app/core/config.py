from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


ENV_FILE_PATH = Path(__file__).resolve().parents[2] / ".env"


class Settings(BaseSettings):
    app_name: str = "Talent Acquisition API"
    app_env: str = "development"
    debug: bool = True
    api_v1_prefix: str = "/api/v1"
    database_url: str = "postgresql+psycopg://postgres:postgres@localhost:5432/talent_acquisition"
    cors_origins: str = "http://localhost:4200"
    jwt_secret_key: str = "change-me-in-production-please-use-a-long-secret"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60
    remember_me_expire_days: int = 7
    integration_encryption_key: str | None = None
    zoho_accounts_base_url: str = "https://accounts.zoho.com"
    zoho_recruit_base_url: str = "https://recruit.zoho.com/recruit/v2"
    zoho_client_id: str | None = None
    zoho_client_secret: str | None = None
    zoho_connection_timeout_seconds: float = 10.0
    zoho_sync_max_records: int = 7000

    model_config = SettingsConfigDict(
        env_file=str(ENV_FILE_PATH),
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()
