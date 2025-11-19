<script>
  import { goto } from '$app/navigation';

  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let loading = false;
  let error = '';
  let success = '';

  async function handleRegister() {
    error = '';
    success = '';

    if (password !== confirmPassword) {
      error = "Passwords do not match";
      return;
    }

    loading = true;

    try {
      const res = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        error = data.detail || 'Registration failed';
        loading = false;
        return;
      }

      success = "Account created successfully! Redirecting...";
      setTimeout(() => goto('/login'), 1300);

    } catch (err) {
      error = 'Network error';
    }

    loading = false;
  }
</script>

<div class="container">
  <div class="card">
    <h1>Create Account</h1>
    <p class="subtitle">Sign up to get started</p>

    {#if error}
      <div class="error">{error}</div>
    {/if}

    {#if success}
      <div class="success">{success}</div>
    {/if}

    <input type="text" placeholder="Full Name" bind:value={name} />
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <input type="password" placeholder="Confirm Password" bind:value={confirmPassword} />

    <button class="register-btn" on:click={handleRegister} disabled={loading}>
      {loading ? 'Creating Account...' : 'Register'}
    </button>

    <div class="divider">or continue with</div>

    <div class="oauth-box">
      <button class="oauth google">G</button>
      <button class="oauth github">GH</button>
      <button class="oauth facebook">F</button>
    </div>

    <div class="login-link">Already have an account? <a href="/login">Login</a></div>
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
    width: 360px;
    padding: 30px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 18px;
    backdrop-filter: blur(20px);
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 1.7rem;
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

  .register-btn {
    width: 100%;
    margin-top: 18px;
    padding: 12px;
    border-radius: 10px;
    background: rgba(0,255,150,0.4);
    border: 1px solid rgba(0,255,150,0.6);
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

  .login-link {
    font-size: 0.9rem;
    margin-top: 8px;
  }

  .login-link a {
    color: #66ccff;
  }

  .error {
    margin-bottom: 10px;
    padding: 8px;
    background: rgba(255,0,0,0.3);
    border: 1px solid rgba(255,0,0,0.5);
    border-radius: 8px;
  }

  .success {
    margin-bottom: 10px;
    padding: 8px;
    background: rgba(0,255,150,0.3);
    border: 1px solid rgba(0,255,150,0.5);
    border-radius: 8px;
  }
</style>
