<!-- frontend/src/routes/+page.svelte -->

<script>
  export let data;
</script>

<div class="hero-container">
  <h1>Welcome to <span class="brand">GenZ AI</span></h1>
  <p class="sub">Proudly Made in Kashmir 🇮🇳</p>
  <p class="tag">Fast. Smart. Calm on your eyes.</p>

  <a href="/chat" class="start-btn frosted">Start Chatting</a>
</div>

<style>
  .hero-container {
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;
  }

  .brand {
    color: var(--pine);
    font-family: 'Sora', sans-serif;
    font-weight: 600;
  }

  .sub {
    opacity: 0.7;
    font-size: 18px;
  }

  .tag {
    font-size: 20px;
    font-weight: 500;
    color: var(--accent);
  }

  .start-btn {
    margin-top: 24px;
    padding: 12px 28px;
    border-radius: 14px;
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    backdrop-filter: blur(12px);
    transition: 0.2s;
  }

  .start-btn:hover {
    transform: scale(1.05);
  }
</style>
