<!-- frontend/src/lib/components/SnowEffect.svelte -->

<script>
  let snowflakes = Array.from({ length: 40 });
</script>

<style>
  .snow {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .flake {
    position: absolute;
    top: -10px;
    background: white;
    width: 6px;
    height: 6px;
    opacity: 0.7;
    border-radius: 50%;
    animation: fall linear infinite;
  }

  @keyframes fall {
    0% { transform: translateY(-10px); }
    100% { transform: translateY(110vh); }
  }
</style>

<div class="snow">
  {#each snowflakes as _, i}
    <div
      class="flake"
      style="
        left: {Math.random() * 100}%;
        animation-duration: {5 + Math.random() * 8}s;
        animation-delay: {Math.random() * 5}s;
      "
    />
  {/each}
</div>
