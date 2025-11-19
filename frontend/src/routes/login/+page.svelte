<script>
  import { loginUser } from '$lib/api/auth';
  import { setAuth } from '$lib/stores/auth';
  import { goto } from '$app/navigation';

  let email = '';
  let username = '';
  let password = '';
  let error = '';
</script>

<div class="auth-container">
  <div class="auth-card">
    <h1 class="title">Welcome Back</h1>
    <p class="subtitle">Login to continue ❄️</p>

    {#if error}
    <div class="error-box">{error}</div>
    {/if}

    <input class="input" bind:value={email} placeholder="Email" />
    <input class="input" bind:value={username} placeholder="Username (optional)" />
    <input class="input" type="password" bind:value={password} placeholder="Password" />

    <button class="btn" on:click={handleLogin}>Login</button>

    <div class="oauth-row">
      <div class="oauth-btn google">G</div>
      <div class="oauth-btn github">GH</div>
      <div class="oauth-btn facebook">F</div>
    </div>

    <p class="switch">
      New here?
      <a href="/register">Create an account</a>
    </p>
  </div>
</div>

<style>
  .auth-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
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

  .title {
    font-size: 28px;
    margin-bottom: 6px;
  }

  .subtitle {
    opacity: 0.8;
    font-size: 14px;
    margin-bottom: 20px;
  }

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
    cursor: pointer;
  }

  .error-box {
    background: rgba(255,0,0,0.3);
    padding: 8px;
    margin-bottom: 14px;
    border-radius: 10px;
  }

  .oauth-row {
    margin-top: 18px;
    display: flex;
    justify-content: center;
    gap: 14px;
  }

  .oauth-btn {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }

  .switch {
    margin-top: 12px;
    opacity: 0.8;
  }
</style>

<script>
  async function handleLogin() {
    error = '';

    const res = await loginUser({ email, username, password });

    if (res.error) {
      error = res.error;
      return;
    }

    setAuth(res.access_token, res.user);
    goto('/chat');
  }
</script>
