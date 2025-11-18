<!-- frontend/src/routes/chat/[id]/+page.svelte -->
<script>
  import { api } from "$lib/api.js";
  import MessageBubble from "$lib/components/MessageBubble.svelte";
  import ChatInput from "$lib/components/ChatInput.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import ModelSelector from "$lib/components/ModelSelector.svelte";

  export let params;

  let messages = [];
  let conversations = [];
  let message = "";
  let model = "g:llama3";

  let token = localStorage.getItem("token") || "";

  let messagesContainer;

  async function loadConversations() {
    conversations = (await api("/conversations?token=" + token)).conversations;
  }

  async function loadMessages() {
    messages = (await api(`/messages/${params.id}?token=` + token)).messages;
  }

  async function send(msg) {
    await api("/chat?token=" + token, "POST", {
      conversation_id: params.id,
      user_message: msg,
      model
    });

    await loadMessages();
  }

  loadConversations();
  loadMessages();

  // Auto-scroll chat
  $: if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
</script>

<div class="layout">
  <Sidebar {conversations} active={params.id} />

  <main>
    <div class="messages" bind:this={messagesContainer}>
      {#each messages as m}
        <MessageBubble role={m.role} content={m.content} />
      {/each}
    </div>

    <ModelSelector bind:model />
    <ChatInput bind:message onSend={send} />
  </main>
</div>

<style>
  .layout {
    display: flex;
    height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
    }

    .messages {
      padding: 12px;
    }
  }
</style>
