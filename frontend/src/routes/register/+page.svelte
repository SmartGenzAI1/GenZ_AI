<script>
  import { registerUser } from '$lib/api/auth';
  import { goto } from '$app/navigation';

  let email = '';
  let username = '';
  let password = '';
  let error = '';
</script>

<div class="auth-container">
  <div class="auth-card">
    <h1 class="title">Create Account</h1>
    <p class="subtitle">Join GenZ AI ❄️</p>

    {#if error}
    <div class="error-box">{error}</div>
    {/if}

    <input class="input" bind:value={email} placeholder="Email" />
    <input class="input" bind:value={username} placeholder="Username" />
    <input class="input" type="password" bind:value={password} placeholder="Password" />

    <button class="btn" on:click={handleRegister}>Create Account</button>

    <p class="switch">
      Already have an account?
      <a href="/login">Login</a>
    </p>
  </div>
</div>

<style>
  /* same styles as login */
  .auth-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .auth-card {
    width: 360px;
    padding: 28px;
    border-radius: 20px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.2);
    text-align: center;
  }
  .title { font-size: 28px; margin-bottom: 6px; }
  .subtitle { opacity: 0.8; margin-bottom: 20px; }
  .input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.05);
    margin-bottom: 12px;
    color: white;
  }
  .btn {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    background: #7fc7ff;
    font-weight: 700;
  }
  .switch { margin-top: 12px; opacity: 0.8; }
  .error-box {
    background: rgba(255,0,0,0.3);
    padding: 8px;
    margin-bottom: 14px;
    border-radius: 10px;
  }
</style>

<script>
  async function handleRegister() {
    error = '';

    const res = await registerUser({ email, username, password });

    if (res.error) {
      error = res.error;
      return;
    }

    goto('/login');
  }
</script>
