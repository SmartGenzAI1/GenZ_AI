<script>
  import { goto } from '$app/navigation';
  import { setAuth } from '$lib/stores/auth';

  let email = '';
  let password = '';
  let loading = false;
  let error = '';

  async function handleLogin() {
    error = '';
    loading = true;

    try {
      const res = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        error = data.detail || 'Login failed';
        loading = false;
        return;
      }

      setAuth(data.access_token);
      document.cookie = `token=${data.access_token}; path=/; max-age=604800`;
      goto('/chat');
    } catch (err) {
      error = 'Network error';
    }

    loading = false;
  }
</script>

<div class="container">
  <div class="card">
    <h1>Welcome Back</h1>
    <p class="subtitle">Sign in to continue</p>

    {#if error}
      <div class="error">{error}</div>
    {/if}

    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />

    <button class="login-btn" on:click={handleLogin} disabled={loading}>
      {loading ? 'Logging in...' : 'Login'}
    </button>

    <div class="divider">or continue with</div>

    <div class="oauth-box">
      <button class="oauth google">G</button>
      <button class="oauth github">GH</button>
      <button class="oauth facebook">F</button>
    </div>

    <div class="register">Don't have an account? <a href="/register">Sign up</a></div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at top, #ffffff33, #00000055);
    backdrop-filter: blur(10px);
  }

  .card {
    width: 350px;
    padding: 30px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 18px;
    backdrop-filter: blur(20px);
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }

  .subtitle {
    opacity: 0.8;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-top: 12px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.1);
    color: white;
  }

  .login-btn {
    width: 100%;
    margin-top: 18px;
    padding: 12px;
    border-radius: 10px;
    background: rgba(0,150,255,0.5);
    border: 1px solid rgba(0,150,255,0.7);
    color: white;
  }

  .divider {
    margin: 18px 0 10px 0;
    opacity: 0.8;
    font-size: 0.9rem;
  }

  .oauth-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 18px;
  }

  .oauth {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    font-size: 1.1rem;
    color: white;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
  }

  .oauth:hover {
    background: rgba(255,255,255,0.2);
  }

  .register {
    font-size: 0.9rem;
    margin-top: 8px;
  }

  .register a {
    color: #66ccff;
  }

  .error {
    margin-bottom: 10px;
    padding: 8px;
    background: rgba(255,0,0,0.3);
    border: 1px solid rgba(255,0,0,0.5);
    border-radius: 8px;
  }
</style>
