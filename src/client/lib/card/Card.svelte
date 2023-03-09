<script>
  export let padding = "0";
  export let height = "auto";
</script>

<div class="mdc-card" style="height: {height}; padding: {padding};">
  <slot />
</div>
