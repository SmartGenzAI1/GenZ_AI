# model_driver.py
import httpx

async def call_groq(model: str, prompt: str) -> str:
    """Call Groq LLM."""
    url = "https://api.groq.com/v1/chat/completions"
    headers = {"Authorization": f"Bearer YOUR_GROQ_API_KEY"}

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json={
            "model": model,
            "messages": [{"role": "user", "content": prompt}]
        })

    data = response.json()
    return data["choices"][0]["message"]["content"]
