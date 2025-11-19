// frontend/src/routes/chat/+layout.js
import { authToken } from '$lib/stores/auth';
import { get } from 'svelte/store';
import { redirect } from '@sveltejs/kit';

export function load() {
  const token = get(authToken);

  if (!token) {
    throw redirect(302, '/login');
  }

  return {};
}
