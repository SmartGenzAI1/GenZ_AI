<!-- frontend/src/lib/components/MessageBubble.svelte -->

<script>
  export let role;
  export let content;
</script>

<div class="bubble {role}">
  {@html content}
</div>

<style>
  .bubble {
    max-width: 80%;
    padding: 12px 16px;
    margin: 10px 0;
    border-radius: 14px;
    font-size: 15px;
    line-height: 1.5;
    backdrop-filter: blur(10px);
  }

  .assistant {
    background: rgba(255, 255, 255, 0.6);
    align-self: flex-start;
  }

  .user {
    background: var(--pine);
    color: white;
    align-self: flex-end;
  }
</style>
