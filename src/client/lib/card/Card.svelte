<script>
  // Props
  export let variant = "elevated"; // Enum: ["elevated", "outlined"]
  export let padding = "0"; // String (Por defecto sin padding por ser de propósito general)
  export let height = "auto"; // String
  export let width = ""; // String
  export let minHeight = ""; // String
  export let maxHeight = ""; // String

  let style = `height: ${height}; `;
  style += `padding: ${padding}; `;
  if (width) style += `width: ${width}; `;
  if (minHeight) style += `min-height: ${minHeight}; `;
  if (maxHeight) style += `max-height: ${maxHeight}; `;
</script>

<div class="mdc-card" class:mdc-card--outlined={variant === "outlined"} {style}>
  <slot />
</div>
