<!-- frontend/src/lib/components/ModelSelector.svelte -->

<script>
  export let model = "g:llama3";
  export let onChange;
</script>

<select bind:value={model} on:change={() => onChange(model)}>
  <option value="g:llama3">Groq — LLaMA3</option>
  <option value="hf:mistralai/Mixtral-8x7B-Instruct-v0.1">HF — Mixtral</option>
  <option value="or:deepseek-chat">OpenRouter — DeepSeek</option>
  <option value="web:search">Web — Search Mode</option>
</select>

<style>
  select {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: white;
    margin: 10px;
  }
</style>
