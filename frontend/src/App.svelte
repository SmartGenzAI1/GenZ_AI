<script>
  import { onMount } from 'svelte';
  import ChatInput from './components/ChatInput.svelte';
  import MessageBubble from './components/MessageBubble.svelte';
  import { fetchReply } from './lib/api.js';

  let messages = [];
  let loading = false;

  // optional: initial welcome message
  onMount(() => {
    messages = [
      { id: cryptoRandomId(), role: 'assistant', text: 'Hello — I am GenZ AI. Ask me anything!' }
    ];
  });

  function cryptoRandomId() {
    return Math.random().toString(36).slice(2, 9);
  }

  async function handleSend(text) {
    if (!text || !text.trim()) return;
    const userMsg = { id: cryptoRandomId(), role: 'user', text: text.trim() };
    messages = [...messages, userMsg];
    loading = true;

    try {
      const res = await fetchReply(text);
      const aiMsg = { id: cryptoRandomId(), role: 'assistant', text: res || 'No response' };
      messages = [...messages, aiMsg];
    } catch (err) {
      const errMsg = { id: cryptoRandomId(), role: 'assistant', text: 'Error: could not contact backend.' };
      messages = [...messages, errMsg];
      console.error('Fetch error:', err);
    } finally {
      loading = false;
      // scroll to bottom
      requestAnimationFrame(() => {
        const el = document.querySelector('.chat-scroll');
        if (el) el.scrollTop = el.scrollHeight;
      });
    }
  }
</script>

<main class="page">
  <header class="topbar">
    <h1>GenZ AI</h1>
  </header>

  <section class="chat">
    <div class="chat-scroll">
      {#each messages as m (m.id)}
        <MessageBubble {m} />
      {/each}
      {#if loading}
        <div class="typing">AI is typing…</div>
      {/if}
    </div>
    <ChatInput on:send={(e) => handleSend(e.detail)} />
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: linear-gradient(180deg, #f7f8fb, #ffffff);
    -webkit-font-smoothing: antialiased;
  }
  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .topbar {
    padding: 14px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    background: white;
    display:flex;
    align-items:center;
    gap:12px;
  }
  .topbar h1 { margin:0; font-size:18px; font-weight:600; }
  .chat {
    flex: 1;
    display:flex;
    flex-direction:column;
    max-width:1000px;
    margin: 0 auto;
    width:100%;
  }
  .chat-scroll {
    flex:1;
    overflow:auto;
    padding: 20px;
    display:flex;
    flex-direction:column;
    gap:10px;
  }
  .typing {
    color:#666;
    font-size:14px;
    padding:8px 12px;
    align-self:flex-start;
  }
  @media (max-width:700px){
    .chat { padding: 0 8px; }
  }
</style>
