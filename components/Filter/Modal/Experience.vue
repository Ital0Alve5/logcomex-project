<template>
  <div class="experience">
    <p class="experience__label">Experiência:</p>
    <ul class="experience__options">
      <li
        v-for="experience in experienceList"
        @click="$emit('chosenExperience', experience)"
      >
        <FilterModalPill> {{ experience }} </FilterModalPill>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const experienceList = [
  "Júnior I",
  "Júnior II",
  "Júnior III",
  "Pleno I",
  "Pleno II",
  "Pleno III",
  "Sênior I",
  "Sênior II",
  "Sênior III",
];
</script>

<style scoped lang="scss">
.experience {
  min-width: 150px;
  height: fit-content;

  &__label {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 900;
    color: $dark;
  }

  &__options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
