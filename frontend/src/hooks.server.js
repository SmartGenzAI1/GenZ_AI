// frontend/src/hooks.server.js
export async function handle({ event, resolve }) {
  const token = event.cookies.get("token");

  // protect /chat/* routes
  if (!token && event.url.pathname.startsWith('/chat')) {
    return Response.redirect(new URL('/login', event.url), 302);
  }

  return resolve(event);
}
