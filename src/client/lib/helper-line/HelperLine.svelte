<script>
  // Props de Helper line
  export let id = ""; // String
  export let type = ""; // Enum ["select", "textField"]
  export let invalidInput; // Boolean
  export let helperText = ""; // String (opcional)
  export let errorText = ""; // String (opcional)
  export let persistent = false; // Boolean (opcional)
  export let validationMsg = false; // Boolean (opcional)
  export let maxLength = null; // Number (opcional)

  // TODO: lograr comportamiento: helperText(persistent if !invalidInput)/errorText(if invalidInput)
  // $: console.log({ invalidInput });
</script>

{#if type === "textField"}
  <div
    class="mdc-text-field-helper-text"
    class:mdc-text-field-helper-text--persistent={!invalidInput && persistent}
    class:mdc-text-field-helper-text--validation-msg={validationMsg}
    id="helper-{id}"
    aria-hidden="true"
  >
    {invalidInput ? errorText : helperText}
  </div>

  {#if maxLength > 0}
    <div class="mdc-text-field-character-counter">0 / {maxLength}</div>
  {/if}
{:else if type === "select"}
  <p id="helper-{id}" class="mdc-select-helper-text">
    {invalidInput ? errorText : helperText}
  </p>
{/if}
