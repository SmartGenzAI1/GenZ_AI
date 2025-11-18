<!-- frontend/src/lib/components/MessageBubble.svelte -->
<script>
  import { fade, fly } from "svelte/transition";
  export let role;
  export let content;
</script>

<div
  class="bubble {role}"
  transition:fade={{ duration: 180 }}
  transition:fly={{ y: 8, duration: 200 }}
>
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
