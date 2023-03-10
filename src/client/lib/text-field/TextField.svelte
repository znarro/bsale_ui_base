<script>
  import { onMount, afterUpdate } from "svelte";
  import { MDCTextField } from "@material/textfield";
  import { HelperLine } from "$lib";

  // Props
  export let value = ""; // String
  export let type = "text"; // String: "text", "number", "email"...
  export let label = ""; // String (opcional)
  export let width = ""; // String (opcional)
  export let placeholder = ""; // String (opcional, si no hay label)
  export let variant = "outlined"; // Enum: ["outlined", "filled"]
  export let leadingIcon = ""; // String: nombre de Material Icons
  export let trailingIcon = ""; // String: nombre de Material Icons
  export let disabled = false; // Boolean
  export let required = false; // Boolean (opcional)
  export let minLength = null; // Number (opcional)
  export let maxLength = null; // Number (opcional)
  export let min = null; // Number (opcional, si type es number)
  export let max = null; // Number (opcional, si type es number)
  export let helperLineProps = {}; // Object con los props del HelperText component (opcional)

  let textFieldElement;
  let id;
  let invalidInput;

  /** Método que actualiza el valor del input */
  const handleInput = (inputValue) => {
    value = type === "number" ? +inputValue : inputValue;
  };

  /** Método que verifica si se ha ingresado un valor inválido */
  const checkInvalidInput = () => {
    console.log("checkInvalidInput");
    const bla = document.getElementById(`text-field-${id}`);
    console.log(bla?.classList);
    invalidInput = bla?.classList.contains("mdc-text-field--invalid");
  };

  onMount(() => {
    const textField = new MDCTextField(textFieldElement);

    // Se crea un hash que sirva como identificador (lo necesita Material)
    id = Date.now() + Math.random();
  });
</script>

<div class="text-field-wrapper" style="width: {width};">
  <label
    id="text-field-{id}"
    class="mdc-text-field"
    class:mdc-text-field--outlined={variant === "outlined"}
    class:mdc-text-field--filled={variant === "filled"}
    class:mdc-text-field--no-label={!label.trim()}
    class:mdc-text-field--disabled={disabled}
    class:mdc-text-field--with-leading-icon={leadingIcon.trim()}
    class:mdc-text-field--with-trailing-icon={trailingIcon.trim()}
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
      {#if leadingIcon.trim()}
        <i
          class="material-symbols-rounded mdc-text-field__icon mdc-text-field__icon--leading"
          tabindex="0"
          role="button">{leadingIcon}</i
        >
      {/if}
    {:else if variant === "filled"}
      <span class="mdc-text-field__ripple" />
      {#if label.trim()}
        <span class="mdc-floating-label" id="label-{id}">{label}</span>
      {/if}
      {#if leadingIcon.trim()}
        <i
          class="material-symbols-rounded mdc-text-field__icon mdc-text-field__icon--leading"
          tabindex="0"
          role="button">{leadingIcon}</i
        >
      {/if}
    {/if}

    <input
      class="mdc-text-field__input"
      {type}
      {value}
      {placeholder}
      {required}
      on:input={(e) => handleInput(e.target.value)}
      on:blur={checkInvalidInput}
      minlength={type !== "number" && minLength}
      maxlength={type !== "number" && maxLength}
      min={type === "number" && min}
      max={type === "number" && max}
      aria-labelledby="label-{id}"
      aria-controls={helperLineProps?.helperText?.trim() && `helper-${id}`}
      aria-describedby={helperLineProps?.helperText?.trim() && `helper-${id}`}
    />

    {#if trailingIcon.trim()}
      <i
        class="material-symbols-rounded mdc-text-field__icon mdc-text-field__icon--trailing"
        tabindex="0"
        role="button">{trailingIcon}</i
      >
    {/if}
  </label>

  {#if helperLineProps?.helperText?.trim() || helperLineProps?.errorText?.trim() || maxLength > 0}
    <div class="mdc-text-field-helper-line">
      <HelperLine
        type="textField"
        {id}
        {maxLength}
        {invalidInput}
        {...helperLineProps}
      />
    </div>
  {/if}
</div>

<style src="./text_field.scss"></style>
