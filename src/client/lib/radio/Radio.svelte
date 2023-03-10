<script>
  import { onMount } from "svelte";
  import { MDCRadio } from "@material/radio";
  import { MDCFormField } from "@material/form-field";

  // Para usar revisar bind:group (https://svelte.dev/tutorial/group-inputs)

  // Props
  export let label = ""; // String
  export let value = ""; // String
  export let group = ""; // String
  export let alignEnd = false; // Boolean (opcional)
  export let disabled = false; // Boolean (opcional)

  let radioElement;
  let formFieldElement;
  let id;

  onMount(() => {
    const radio = new MDCRadio(radioElement);
    const formField = new MDCFormField(formFieldElement);
    formField.input = radio;

    // Se crea un hash que sirva como identificador (lo necesita Material)
    id = Date.now() + Math.random();
  });
</script>

<div
  bind:this={formFieldElement}
  class="mdc-form-field"
  class:mdc-form-field--align-end={alignEnd}
>
  <div
    bind:this={radioElement}
    class="mdc-radio mdc-radio--touch"
    class:mdc-radio--disabled={disabled}
  >
    <input
      class="mdc-radio__native-control"
      type="radio"
      id="radio-{id}"
      checked
      {value}
      bind:group
      name={group}
    />
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle" />
      <div class="mdc-radio__inner-circle" />
    </div>
    <div class="mdc-radio__ripple" />
  </div>
  <label for="radio-{id}">{label}</label>
</div>
