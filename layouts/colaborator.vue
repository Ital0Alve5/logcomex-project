<template>
  <div class="profile">
    <div class="profile__cover"></div>
    <slot />
  </div>
</template>

<style lang="scss">
body {
  background-color: $primaryBackground;
}
.profile {
  &__cover {
    width: 100%;
    height: 200px;
    background: $dark;
  }
}
</style>
