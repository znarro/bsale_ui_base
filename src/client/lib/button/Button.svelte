<script>
  import { onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";

  // Props
  export let type = "button"; // String: "button", "submit", etc
  export let variant = "raised"; // Enum: ["raised", "outlined", "text"]
  export let disabled = false; // Boolean (opcional)
  export let leadingIcon = ""; // String: nombre de Material Icons (opcional)
  export let trailingIcon = ""; // String: nombre de Material Icons (opcional)

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
    class:mdc-button--leading={leadingIcon.trim()}
    class:mdc-button--trailing={trailingIcon.trim()}
    {type}
    {disabled}
    on:click
  >
    <span class="mdc-button__ripple" />

    {#if leadingIcon.trim()}
      <i class="material-icons mdc-button__icon" aria-hidden="true">{leadingIcon}</i>
    {/if}

    <span class="mdc-button__touch" />
    <span class="mdc-button__label center-content">
      <slot />
    </span>

    {#if trailingIcon.trim()}
      <i class="material-icons mdc-button__icon" aria-hidden="true">{trailingIcon}</i>
    {/if}
  </button>
</div>

<style src="./button.scss"></style>
