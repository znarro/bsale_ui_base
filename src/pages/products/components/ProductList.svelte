<script>
  import { Card, Button } from "$lib";
  import ES from "$locales/ES";
  import { sideBarAction } from "../store";

  export let data = {};

  const handleClick = () => {
    sideBarAction.set("CREATE_PRODUCT");
    isOpen = true;
  };
</script>

<Card padding="20px">
  <div class="bs-main__content-head">
    <div class="bs-search-bar__wrapper">Buscador</div>
    <Button id="add-slider" on:click={handleClick}>
      <i class="material-icons">add</i>
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
