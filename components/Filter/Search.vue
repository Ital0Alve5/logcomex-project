<template>
  <div class="search">
    <input
      class="search__input"
      :placeholder="placeholder"
      @input="$emit('searchValue', ($event.target as HTMLInputElement).value)"
    />
    <IconSearch class="search__icon" color="#9c9cb7" :width="16" :height="16" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  placeholder: {
    type: String,
    default: "Procure pelo nome...",
  },
});
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  &__input {
    padding: 12px 12px 12px 36px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid $primaryBorder;
    background-color: $primaryBackground;
    font-size: 14px;
    font-weight: 400;
    color: $dark;
  }

  &__icon {
    padding: 0 12px;
    position: absolute;
  }
}
</style>
