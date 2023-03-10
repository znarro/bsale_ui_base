<script>
  import { Card, Button, TextField } from "$lib";
  import ES from "$locales/es.json";

  export let data = {};
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
    <Button variant="outlined" disabled icon="add">
      {ES.common.add}
    </Button>
  </div>

  <div class="bs-main__content-body">
    <p>Time: {data.time}</p>
    <form on:submit|preventDefault={() => console.log("submit!")}>
      <TextField
        width="300px"
        label="Email"
        type="email"
        required
        leadingIcon="mail"
        maxLength={10}
        helperLineProps={{
          helperText: "Escribe tu email",
          errorText: "Debe tener un formato de email válido",
          validationMsg: true,
        }}
      />
      <TextField
        width="300px"
        label="Edad"
        type="number"
        min="18"
        required
        helperLineProps={{
          helperText: "Escribe tu edad",
          errorText: "Debe ser mayor de 18",
          validationMsg: true,
        }}
      />
      <Button type="submit" variant="raised">Guardar</Button>
    </form>
    {#each data.list || [] as product}
      <p>{product.id}: {product.name}</p>
    {/each}
  </div>
</Card>
