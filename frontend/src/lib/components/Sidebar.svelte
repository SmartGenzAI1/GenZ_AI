<!-- frontend/src/lib/components/Sidebar.svelte -->

<script>
  export let conversations = [];
  export let active;
</script>

<aside>
  <h2>Chats</h2>

  {#each conversations as convo}
    <a href={`/chat/${convo.id}`} class="{active === convo.id ? 'active' : ''}">
      {convo.title}
    </a>
  {/each}
</aside>

<style>
  aside {
    width: 220px;
    padding: 20px;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(10px);
    border-right: 1px solid var(--mist);
  }

  a {
    display: block;
    padding: 10px;
    border-radius: 8px;
    text-decoration: none;
    color: var(--text);
  }

  .active {
    background: var(--pine);
    color: white;
  }
</style>
