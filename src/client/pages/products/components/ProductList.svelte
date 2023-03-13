<script>
  import { Card, Button, TextField, Sidebar, TabBar } from "$lib";
  import FormExample from "./FormExample.svelte";
  import ES from "$locales/es.json";

  export let data = {};

  let isSidebarOpen;
  let selectedTabIndex = 0;

  $: console.log({ selectedTabIndex });
</script>

<Card>
  <div class="bs-main__content-head">
    <div class="bs-search-bar__wrapper">
      <TextField
        variant="filled"
        label="Buscar"
        leadingIcon="search"
        trailingIcon="clear"
      />
    </div>
    <Button leadingIcon="add" on:click={() => (isSidebarOpen = true)}>
      {ES.common.add}
    </Button>
  </div>

  <div class="bs-main__content-body">
    <p>Time: {data.time}</p>

    {#each data.list || [] as product}
      <p>{product.id}: {product.name}</p>
    {/each}
  </div>
</Card>

<Sidebar
  bind:isOpen={isSidebarOpen}
  title="Sidebar"
  onSubmit={() => console.log("Submit")}
  contentPadding="0"
>
  <TabBar
    slot="tabs"
    tabs={[{ title: "Form", active: true }, { title: "Nada" }]}
    on:tab-click={(e) => (selectedTabIndex = e.detail.index)}
  />
  <div slot="content">
    {#if selectedTabIndex === 0}
      <FormExample />
    {:else if selectedTabIndex === 1}
      <p>Nada</p>
    {/if}
  </div>
</Sidebar>
