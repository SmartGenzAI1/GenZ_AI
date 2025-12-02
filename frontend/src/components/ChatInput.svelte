<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let value = '';
  let sending = false;

  function send() {
    const trimmed = value.trim();
    if (!trimmed) return;
    dispatch('send', trimmed);
    value = '';
  }

  function onKey(e) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      send();
    }
  }
</script>

<div class="input-area">
  <textarea bind:value rows="2" placeholder="Type a message and press Ctrl/Cmd+Enter to send" on:keydown={onKey}></textarea>
  <div class="actions">
    <button class="send" on:click={send} aria-label="Send message">Send</button>
  </div>
</div>

<style>
  .input-area {
    display:flex;
    gap:10px;
    padding:12px;
    border-top: 1px solid rgba(0,0,0,0.06);
    background:white;
  }
  textarea {
    flex:1;
    resize:none;
    padding:10px;
    border-radius:8px;
    border:1px solid rgba(0,0,0,0.06);
    font-family:inherit;
    font-size:14px;
  }
  .actions { display:flex; align-items:flex-end; }
  .send {
    background:#0f172a;
    color:white;
    border:none;
    padding:8px 14px;
    border-radius:8px;
    cursor:pointer;
  }
</style>
