<template>
  <div class="modal" :class="{ 'modal--open': isOpen }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.modal {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 20px;
  width: 100%;
  height: 0;
  background-color: $primaryBackground;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-height: 300px;
  border-radius: 8px;
  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.1s ease-in-out;
  justify-content: space-between;

  &--open {
    transform: scaleY(1);
    height: fit-content;
    margin-bottom: 20px;
  }
}
</style>
