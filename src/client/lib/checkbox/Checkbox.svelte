<script>
  import { onMount } from "svelte";
  import { MDCFormField } from "@material/form-field";
  import { MDCCheckbox } from "@material/checkbox";

  // Props
  export let label = ""; // String
  export let checked = ""; // String
  export let alignEnd = false; // Boolean (opcional)
  export let noWrap = false; // Boolean (opcional, para label muy largo)
  export let disabled = false; // Boolean (opcional)

  let checkboxElement;
  let formFieldElement;
  let id;

  onMount(() => {
    const checkbox = new MDCCheckbox(checkboxElement);
    const formField = new MDCFormField(formFieldElement);
    formField.input = checkbox;

    // Se crea un hash que sirva como identificador (lo necesita Material)
    id = Date.now() + Math.random();
  });
</script>

<div
  bind:this={formFieldElement}
  class="mdc-form-field"
  class:mdc-form-field--align-end={alignEnd}
  class:mdc-form-field--nowrap={noWrap}
>
  <div
    bind:this={checkboxElement}
    class="mdc-checkbox mdc-checkbox--touch"
    class:mdc-checkbox--disabled={disabled}
  >
    <input
      bind:checked
      type="checkbox"
      class="mdc-checkbox__native-control"
      id="checkbox-{id}"
    />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path
          class="mdc-checkbox__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
      <div class="mdc-checkbox__mixedmark" />
    </div>
    <div class="mdc-checkbox__ripple" />
  </div>

  <label for="checkbox-{id}">{label}</label>
</div>
