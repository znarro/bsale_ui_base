<script>
  import { Button, TextField, Switch, Radio, Checkbox } from "$lib";

  let formData = {};
  let gender = "";

  $: console.log("formData", formData);
</script>

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
