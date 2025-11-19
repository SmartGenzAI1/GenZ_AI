<!-- frontend/src/lib/components/Sidebar.svelte -->
 <script>
  import { goto } from '$app/navigation';
  import { logout } from '$lib/stores/auth';

  function handleLogout() {
    logout();
    document.cookie = "token=; path=/; max-age=0";
    goto('/login');
  }
</script>

<div class="sidebar">
  <div class="logo">GenZ AI</div>

  <nav class="menu">
    <a href="/chat" class="item">💬 Chats</a>
    <a href="/settings" class="item">⚙️ Settings</a>
  </nav>

  <button class="logout" on:click={handleLogout}>Logout</button>
</div>

<style>
  .sidebar {
    width: 260px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.06);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }

  .item {
    padding: 12px;
    border-radius: 10px;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
  }

  .item:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .logout {
    margin-top: 20px;
    width: 100%;
    padding: 12px;
    background: rgba(255, 0, 0, 0.3);
    border: 1px solid rgba(255, 0, 0, 0.4);
    color: white;
    border-radius: 10px;
  }

  .logout:hover {
    background: rgba(255, 0, 0, 0.45);
  }
</style>
