// frontend/src/lib/api/auth.js
import { PUBLIC_BACKEND_URL } from '$env/static/public';

export async function registerUser(data) {
  const res = await fetch(`${PUBLIC_BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return await res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${PUBLIC_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return await res.json();
}
