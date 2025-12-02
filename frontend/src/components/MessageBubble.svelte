<script>
  export let m;
</script>

<div class="bubble-wrapper {m.role}">
  <div class="bubble">
    {@html escapeHtml(m.text)}
  </div>
</div>

<script>
  // simple HTML escape to avoid accidental HTML injection
  function escapeHtml(s) {
    if (!s) return '';
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }
</script>

<style>
  .bubble-wrapper { display:flex; width:100%; }
  .bubble-wrapper.user { justify-content:flex-end; }
  .bubble-wrapper.assistant { justify-content:flex-start; }

  .bubble {
    max-width: 78%;
    padding: 10px 14px;
    border-radius: 14px;
    line-height:1.4;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03);
    background: #f1f5f9;
    color: #0f172a;
  }
  .bubble-wrapper.user .bubble {
    background: linear-gradient(90deg,#4f46e5,#06b6d4);
    color: white;
  }
</style>
