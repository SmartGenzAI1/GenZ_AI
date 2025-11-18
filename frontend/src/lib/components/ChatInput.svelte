<!-- frontend/src/lib/components/ChatInput.svelte -->

<script>
  export let message = "";
  export let onSend;

  function send() {
    if (message.trim().length > 0) onSend(message);
  }
</script>

<div class="input-box frosted">
  <input
    type="text"
    bind:value={message}
    placeholder="Type something…"
    on:keydown={(e) => e.key === 'Enter' && send()}
  />

  <button class="send" on:click={send}>
    ➤
  </button>
</div>

<style>
  .input-box {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 16px;
    margin: 12px;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 15px;
    padding: 10px;
    outline: none;
  }

  .send {
    background: var(--accent);
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
  }
</style>
