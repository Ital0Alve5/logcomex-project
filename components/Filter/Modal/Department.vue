<template>
  <div class="department">
    <p class="department__label">Departamento:</p>
    <ul class="department__options">
      <li
        v-for="department in departmentList"
        @click="$emit('chosenDepartment', department)"
      >
        <FilterModalPill> {{ department }} </FilterModalPill>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const departmentList = [
  "Tecnologia",
  "Financeiro",
  "Pessoas e Cultura",
  "Produto",
  "Jurídico",
  "Marketing",
  "Administrativo",
  "Aquisição de Talentos",
];
</script>

<style scoped lang="scss">
.department {
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
