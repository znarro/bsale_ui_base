<script>
  import { onMount, afterUpdate } from "svelte";
  import { MDCTextField } from "@material/textfield";

  // Props del TextField
  export let value = ""; // String
  export let type = "text"; // String: "text", "number", "email"...
  export let label = ""; // String (opcional)
  export let placeholder = ""; // String (opcional, si no hay label)
  export let variant = "outlined"; // Enum: ["outlined", "filled"]
  export let disabled = false; // Boolean
  export let required = false; // Boolean (opcional)

  // Props de Helper line
  export let helperText = ""; // String (opcional)
  export let errorText = ""; // String (opcional)
  export let persistent = false; // Boolean (opcional)
  export let validationMsg = false; // Boolean (opcional)
  export let maxLength = null; // Number (opcional)

  let textFieldElement;
  let invalidInput;
  let id;

  /** Método que actualiza el valor del input */
  const handleInput = (inputValue) => {
    value = type === "number" ? +inputValue : inputValue;
  };

  /** Método que verifica si se ha ingresado un valor inválido */
  const checkValidInput = () => {
    const helperTextElement = document.getElementById(`helper-${id}`);
    return helperTextElement?.classList.contains(
      "mdc-text-field-helper-text--validation-msg"
    );
  };

  onMount(() => {
    const textField = new MDCTextField(textFieldElement);
    id = label.toLowerCase().split(" ").join("-");
  });

  afterUpdate(() => (invalidInput = checkValidInput()));
</script>

<label
  class="mdc-text-field"
  class:mdc-text-field--outlined={variant === "outlined"}
  class:mdc-text-field--filled={variant === "filled"}
  class:mdc-text-field--no-label={label.trim()}
  class:mdc-text-field--disabled={disabled}
  bind:this={textFieldElement}
>
  {#if variant === "outlined"}
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading" />
      <span class="mdc-notched-outline__notch">
        {#if label.trim()}
          <span class="mdc-floating-label" id="label-{id}">{label}</span>
        {/if}
      </span>
      <span class="mdc-notched-outline__trailing" />
    </span>
  {:else if variant === "filled"}
    <span class="mdc-text-field__ripple" />
    {#if label.trim()}
      <span class="mdc-floating-label" id="label-{id}">{label}</span>
    {/if}
  {/if}

  <input
    class="mdc-text-field__input"
    {type}
    {value}
    {placeholder}
    {required}
    maxlength={maxLength}
    on:input={(e) => handleInput(e.target.value)}
    aria-labelledby="label-{id}"
    aria-controls={helperText.trim() && `helper-${id}`}
    aria-describedby={helperText.trim() && `helper-${id}`}
  />

  {#if variant === "filled"}
    <span class="mdc-line-ripple" />
  {/if}
</label>

{#if helperText.trim()}
  <div class="mdc-text-field-helper-line">
    <div
      class="mdc-text-field-helper-text"
      class:mdc-text-field-helper-text--persistent={!invalidInput}
      class:mdc-text-field-helper-text--validation-msg={validationMsg}
      id="helper-{id}"
      aria-hidden="true"
    >
      {invalidInput ? errorText : helperText}
    </div>

    {#if maxLength > 0}
      <div class="mdc-text-field-character-counter">0 / {maxLength}</div>
    {/if}
  </div>
{/if}
