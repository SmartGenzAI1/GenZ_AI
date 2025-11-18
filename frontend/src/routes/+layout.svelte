<!-- frontend/src/routes/+layout.svelte -->

<script>
  import "../app.css";
  import SnowEffect from "$lib/components/SnowEffect.svelte";
  import ChinarEffect from "$lib/components/ChinarEffect.svelte";
  import { theme } from "$lib/stores/theme.js";
</script>

<div class="app">
  <SnowEffect />
  <ChinarEffect />
  <slot />
</div>

<style>
  .app {
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
</style>
