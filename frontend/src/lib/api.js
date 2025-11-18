// frontend/src/lib/api.js

const BASE = "http://localhost:8000";

export async function api(endpoint, method = "GET", body = null, token = "") {
  const res = await fetch(`${BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": token ? token : ""
    },
    body: body ? JSON.stringify(body) : null
  });

  return res.json();
}
