# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from database import init_db

# Routers
from routes.auth import router as auth_router
from routes.conversation import router as conversation_router
from routes.message import router as message_router
from routes.memory import router as memory_router
from routes.chat import router as chat_router   # will be created in Phase 3G

app = FastAPI(
    title="GenZ AI Backend",
    version="1.0.0",
    description="Backend services for GenZ AI - Multi-model AI assistant"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Startup event
@app.on_event("startup")
async def startup():
    await init_db()

# Root test route
@app.get("/")
async def root():
    return {"message": "GenZ AI Backend Running", "location": "Kashmir 🇮🇳"}

# Register all routers
app.include_router(auth_router)
app.include_router(conversation_router)
app.include_router(message_router)
app.include_router(memory_router)
# chat_router will be active after Phase 3G
# app.include_router(chat_router)
