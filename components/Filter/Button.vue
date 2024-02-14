<template>
  <button>
    <slot name="icon" />
    <slot name="label" />
    <slot name="filtersQuantity" />
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid $primaryBorder;
  background-color: $primaryBackground;
  color: $dark;
}

button:hover {
  cursor: pointer;
  background-color: $primaryBorderHover;
}
</style>
