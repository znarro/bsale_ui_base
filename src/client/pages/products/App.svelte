<script>
  import { onMount } from "svelte";
  import ApiCall from "$helpers/api_call";
  import { Button } from "$lib";
  import { showFilters } from "./store";
  import ProductList from "./components/ProductList.svelte";

  let data = {};

  const getProducts = async () => {
    try {
      const response = await ApiCall.request("/api/products");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(async () => {
    data = await getProducts();
  });
</script>

<div
  class="bs-content__wrapper bs-content__wrapper__non-scrollable"
  class:bs-content__wrapper-with-filter={$showFilters}
>
  <main class="bs-main" class:bs-main__long={$showFilters}>
    <div class="bs-main__container">
      <section class="bs-main__header">
        <h1 class="bs-headline-1">Products page</h1>

        <Button on:click={showFilters.set(!$showFilters)}>Filtros</Button>
      </section>

      <ProductList {data} />
    </div>
  </main>

  {#if $showFilters}
    <aside class="bs-filters">Componente de filtros</aside>
  {/if}
</div>
