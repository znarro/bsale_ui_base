<script>
  import { Card, Button } from "$lib";
  import ES from "$locales/ES";

  export let data = {};
</script>

<Card padding="20px">
  <div class="bs-main__content-head">
    <div class="bs-search-bar__wrapper">Buscador</div>
    <Button>
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
