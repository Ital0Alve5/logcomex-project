<template>
  <div class="pill" :class="{ 'pill--marked': isMarked }" @click="togglePill">
    <slot />
  </div>
</template>
<script lang="ts" setup>
const isMarked = ref(false);

function togglePill() {
  isMarked.value = !isMarked.value;
}
</script>

<style scoped lang="scss">
.pill {
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

  &--marked {
    background-color: $dark;
    color: #fff;
  }

  &:not(.pill--marked):hover {
    background-color: $primaryBorderHover;
  }
}

div:hover {
  cursor: pointer;
}
</style>
