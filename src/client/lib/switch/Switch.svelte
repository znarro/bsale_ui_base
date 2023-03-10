<script>
  import { onMount } from "svelte";
  import { MDCSwitch } from "@material/switch";

  // Props
  export let label = "";
  export let checked = "";

  let switchElement;
  let id;

  onMount(() => {
    const switchControl = new MDCSwitch(switchElement);

    // Se crea un hash que sirva como identificador (lo necesita Material)
    id = Date.now() + Math.random();
  });

  // TODO: hacer el bind:checked según el valor de aria-checked
</script>

<div class="switch-wrapper">
  <button
    bind:this={switchElement}
    id={`switch-${id}`}
    class="mdc-switch mdc-switch--unselected"
    type="button"
    role="switch"
    aria-checked="false"
  >
    <div class="mdc-switch__track" />
    <div class="mdc-switch__handle-track">
      <div class="mdc-switch__handle">
        <div class="mdc-switch__shadow">
          <div class="mdc-elevation-overlay" />
        </div>
        <div class="mdc-switch__ripple" />
      </div>
    </div>
  </button>
  <label for={`switch-${id}`}>{label}</label>
</div>

<style src="./switch.scss"></style>
