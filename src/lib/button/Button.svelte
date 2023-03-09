<script>
  import { onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";

  let buttonElement;

  onMount(() => {
    const buttonRipple = new MDCRipple(buttonElement);
  });
</script>

<div class="mdc-touch-target-wrapper">
  <button
    class="mdc-button mdc-button--touch mdc-button--raised"
    bind:this={buttonElement}
    on:click
  >
    <span class="mdc-button__ripple" />
    <span class="mdc-button__touch" />
    <span class="mdc-button__label align">
      <slot />
    </span>
  </button>
</div>

<style src="./button.scss"></style>
