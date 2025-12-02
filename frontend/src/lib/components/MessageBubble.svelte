<!-- frontend/src/lib/components/MessageBubble.svelte -->
<script>
  import { fade, fly } from "svelte/transition";
  export let role;
  export let content;
</script>

<div transition:fade={{ duration: 180 }}>
  <div
    class="bubble {role}"
    transition:fly={{ y: 8, duration: 200 }}
  >
    {@html content}
  </div>
</div>

<style>
  .bubble {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 12px;
    margin-bottom: 8px;
    backdrop-filter: blur(4px);
  }

  .assistant {
    background: rgba(255, 255, 255, 0.55);
    color: var(--text);
    align-self: flex-start;
  }

  .user {
    background: var(--pine);
    color: white;
    align-self: flex-end;
  }
</style>
