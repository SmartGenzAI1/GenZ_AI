const API_URL = import.meta.env.VITE_API_URL || '/api/chat';

export async function fetchReply(prompt) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  if (!res.ok) {
    throw new Error('Network error');
  }

  const data = await res.json();
  // Expect { reply: "..." } or { response: "..." } - normalize:
  return data.reply ?? data.response ?? data.text ?? JSON.stringify(data);
}
