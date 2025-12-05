# backend/database.py
from sqlalchemy.ext.asyncio import create_async_engine
import ssl
import os

DB_URL = os.getenv("DATABASE_URL")

# Create SSL context (future-proof)
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

engine = create_async_engine(
    DB_URL.replace("postgres://", "postgresql+asyncpg://"),
    connect_args={"ssl": ssl_context},  # <-- FIXED & FUTURE-PROOF
)

async def init_db():
    async with engine.begin() as conn:
        # Create tables if needed
        await conn.run_sync(Base.metadata.create_all)
