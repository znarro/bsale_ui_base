<script>
  import { Button } from "$lib";
  import { fly } from "svelte/transition";

  // 1. Este componente usa named slots (https://svelte.dev/tutorial/named-slots)
  // 2. Cuando se use el componente, este prop debe ser enlazado a una variable con la directiva bind. Ej: bind:isOpen={isClientSidebarOpen}

  // Props
  export let isOpen = false; // Boolean
  export let onSubmit = () => {}; // Method
  export let title = ""; // String
  export let action = "Guardar"; // String
  export let noAction = false; // Boolean (opcional, si no quieres botón)
  export let menuOptions = []; // Array (opcional, si requiere menú contextual): [{ text: [String], icon: [String], method: [Function] }...]
  export let loading = false; // Boolean (opcional)
  export let preventClosingMethod; // Method (opcional, detiene el cierre del sidebar ante una validación)

  let fullScreen = false;

  const handleClose = () => {
    if (preventClosingMethod instanceof Function) {
      preventClosingMethod();
      return;
    }
    isOpen = false;
  };
</script>

{#if isOpen}
  <div class="sidebar-overlay">
    <form
      class="sidebar-form"
      class:sidebar-form__full={fullScreen}
      transition:fly={{ x: 200, duration: 400 }}
      on:submit|preventDefault={onSubmit}
    >
      <header class="sidebar-form__header">
        <div class="first-row" class:no-menu={!menuOptions.length > 0}>
          <div class="left-column">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <i class="material-symbols-rounded" on:click={handleClose}> close </i>
            {#if fullScreen}
              <i class="material-symbols-rounded inverted" on:click={() => (fullScreen = false)}>
                close_fullscreen
              </i>
            {:else}
              <i class="material-symbols-rounded inverted" on:click={() => (fullScreen = true)}>
                open_in_full
              </i>
            {/if}
          </div>

          <div class="center-column">
            <h1 class="bs-headline-1">{title}</h1>
            {#if !noAction}
              <Button id={title} type="submit">{action}</Button>
            {/if}
          </div>

          {#if menuOptions.length > 0}
            <div class="right-column">
              <i class="material-symbols-rounded" on:click={handleClose}>
                more_vert
              </i>
            </div>
          {/if}
        </div>

        <div class="second-row" class:no-menu={!menuOptions.length > 0}>
          <div class="center-column">
            <!-- TABS SLOT: el componente deberá tener el atributo slot="tabs" -->
            <slot name="tabs" />
          </div>
        </div>
      </header>


      <div class="sidebar-form__content" class:no-menu={!menuOptions.length > 0}>
        <div class="center-column">
          <!-- CONTENT SLOT: el componente deberá tener el atributo slot="content" -->
          <slot name="content">
            <span>Sin contenido</span>
          </slot>
        </div>
      </div>
    </form>
  </div>
{/if}

<style src="./sidebar.scss"></style>
