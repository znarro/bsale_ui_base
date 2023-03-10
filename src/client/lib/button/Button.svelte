<script>
  import { onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";

  // Props
  export let type = "button"; // String: "button", "submit", etc
  export let variant = "raised"; // Options: ["raised", "outlined", "text"]
  export let disabled = false; // Boolean

  let buttonElement;

  onMount(() => {
    const buttonRipple = new MDCRipple(buttonElement);
  });
</script>

<div class="mdc-touch-target-wrapper">
  <button
    bind:this={buttonElement}
    class="mdc-button mdc-button--touch"
    class:mdc-button--raised={variant === "raised"}
    class:mdc-button--outlined={variant === "outlined"}
    {type}
    on:click
  >
    <span class="mdc-button__ripple" />
    <span class="mdc-button__touch" />
    <span class="mdc-button__label center-content">
      <slot />
    </span>
  </button>
</div>

<style src="./button.scss"></style>
