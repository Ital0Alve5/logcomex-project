<template>
  <div class="role">
    <p class="role__label">Cargo:</p>
    <ul class="role__options">
      <li v-for="role in roleList" @click="$emit('chosenRole', role)">
        <FilterModalPill> {{ role }} </FilterModalPill>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const roleList = [
  "Frontend Engineer",
  "Financial Assistant",
  "Culture Manager",
  "Backend Tech Lead",
  "Product Manager",
  "Legal Manager",
  "Product Designer",
  "Product Quality Assurance",
  "Officer Assistant",
  "Tech Recruiter",
];
</script>

<style scoped lang="scss">
.role {
  min-width: 150px;
  height: fit-content;
  border-bottom: 1px solid #c0c0d6;
  padding-bottom: 16px;

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
