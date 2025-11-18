# backend/services/model_router.py

import httpx
from config import settings
from services.search_engine import run_search_query


async def call_groq(model: str, prompt: str):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {settings.GROQ_API_KEY}"}

    body = {
        "model": model,
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.4,
        "stream": False
    }

    async with httpx.AsyncClient() as client:
        res = await client.post(url, json=body, headers=headers)
        data = res.json()

    return data["choices"][0]["message"]["content"]


async def call_huggingface(model: str, prompt: str):
    url = f"https://api-inference.huggingface.co/models/{model}"
    headers = {"Authorization": f"Bearer {settings.HF_API_KEY}"}
    payload = {"inputs": prompt}

    async with httpx.AsyncClient() as client:
        res = await client.post(url, headers=headers, json=payload)
        data = res.json()

    if isinstance(data, list) and "generated_text" in data[0]:
        return data[0]["generated_text"]

    return str(data)


async def call_openrouter(model: str, prompt: str):
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {"Authorization": f"Bearer {settings.OPENROUTER_API_KEY}"}

    body = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}]
    }

    async with httpx.AsyncClient() as client:
        res = await client.post(url, json=body, headers=headers)
        data = res.json()

    return data["choices"][0]["message"]["content"]


async def route_model(model: str, prompt: str):
    # web/search mode
    if model.startswith("web:"):
        return await run_search_query(prompt)

    # Groq models
    if model.startswith("g:"):
        pure_model = model.replace("g:", "")
        return await call_groq(pure_model, prompt)

    # HuggingFace models
    if model.startswith("hf:"):
        pure_model = model.replace("hf:", "")
        return await call_huggingface(pure_model, prompt)

    # OpenRouter models
    if model.startswith("or:"):
        pure_model = model.replace("or:", "")
        return await call_openrouter(pure_model, prompt)

    # fallback
    return "⚠️ Unknown model prefix. Use g: / hf: / or: / web:"
