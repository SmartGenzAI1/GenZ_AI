<!-- frontend/src/lib/components/SnowEffect.svelte -->
<script>
  // No JS needed — all optimized CSS animations
</script>

<style>
  .snow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .snow::before, 
  .snow::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 0;

    /* dot pattern */
    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.45;

    animation: snowFall 12s linear infinite;
  }

  .snow::after {
    opacity: 0.25;
    animation-duration: 18s;
  }

  @keyframes snowFall {
    to {
      transform: translateY(20%);
    }
  }
</style>

<div class="snow"></div>
