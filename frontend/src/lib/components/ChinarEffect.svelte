<!-- frontend/src/lib/components/ChinarEffect.svelte -->

<script>
  let leaves = Array.from({ length: 8 });
</script>

<style>
  .leaf {
    position: fixed;
    top: -50px;
    width: 30px;
    height: 30px;
    background: var(--accent);
    clip-path: polygon(50% 0%, 60% 20%, 80% 20%, 65% 40%, 75% 60%, 50% 50%, 25% 60%, 35% 40%, 20% 20%, 40% 20%);
    opacity: 0.7;
    animation: drift linear infinite;
  }

  @keyframes drift {
    0% { transform: translateY(-50px) rotate(0deg); }
    100% { transform: translateY(110vh) rotate(340deg); }
  }
</style>

{#each leaves as _, i}
  <div class="leaf"
    style="
      left: {Math.random() * 100}%;
      animation-duration: {8 + Math.random() * 5}s;
      animation-delay: {Math.random() * 5}s;
    "
  />
{/each}
