<script>
  import { Card, Button, TextField, Switch, Radio, Checkbox } from "$lib";
  import ES from "$locales/es.json";

  export let data = {};

  let formData = {};
  let gender = "";

  $: console.log("formData", formData);
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
    <Button variant="outlined" disabled leadingIcon="add">
      {ES.common.add}
    </Button>
  </div>

  <div class="bs-main__content-body">
    <p>Time: {data.time}</p>
    <form on:submit|preventDefault={() => console.log("submit!")}>
      <TextField
        bind:value={formData.name}
        width="300px"
        label="Nombre"
        maxLength={10}
        helperLineProps={{
          helperText: "Escribe tu nombre",
        }}
      />

      <TextField
        bind:value={formData.email}
        width="300px"
        label="Email"
        type="email"
        required
        leadingIcon="mail"
        helperLineProps={{
          helperText: "Escribe tu email",
          errorText: "Debe tener un formato de email válido",
          validationMsg: true,
        }}
      />

      <TextField
        bind:value={formData.age}
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

      <Switch label="Tengo mascota" />

      <p>Genero:</p>
      <Radio bind:group={gender} label="Masculino" value="M" />
      <Radio bind:group={gender} label="Femenino" value="F" />

      <Checkbox bind:checked={formData.agreeOnTerms} label="Acepto términos" />

      <Button type="submit" variant="raised">Guardar</Button>
    </form>

    {#each data.list || [] as product}
      <p>{product.id}: {product.name}</p>
    {/each}
  </div>
</Card>
