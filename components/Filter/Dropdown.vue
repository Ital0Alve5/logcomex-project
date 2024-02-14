<template>
  <div class="dropdown">
    <div class="dropdown__header">
      <p>{{ title }}</p>
      <IconArrowDown class="dropdown__icon" color="#000" />
    </div>
    <ul class="dropdown__options">
      <li class="dropdown__option">teste</li>
      <li class="dropdown__option">teste</li>
      <li class="dropdown__option">teste</li>
      <li class="dropdown__option">teste</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.dropdown {
  width: 150px;
  position: relative;

  &__header {
    display: flex;
  }

  &__icon {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
  }

  &__options {
    display: flex;
    flex-direction: column;
  }

  &__option {
    background-color: red;
  }
}
</style>
