// frontend/src/lib/stores/auth.js
import { writable } from 'svelte/store';

export const authToken = writable(null);
export const authUser = writable(null);

export function setAuth(token, user) {
  authToken.set(token);
  authUser.set(user);

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function loadAuth() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  
  if (token) authToken.set(token);
  if (user) authUser.set(JSON.parse(user));
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  authToken.set(null);
  authUser.set(null);
}
