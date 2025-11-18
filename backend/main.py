# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from database import init_db

app = FastAPI(
    title="GenZ AI Backend",
    version="1.0.0",
    description="Backend services for GenZ AI - Multi-model AI assistant"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Start DB
@app.on_event("startup")
async def startup():
    await init_db()

# Root endpoint
@app.get("/")
async def root():
    return {"message": "GenZ AI Backend Running", "location": "Kashmir 🇮🇳"}
