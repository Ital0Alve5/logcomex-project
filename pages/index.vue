<template>
  <div class="filters">
    <div class="filters__default">
      <FilterSearch @searchValue="updateSearchValue" />
      <FilterButton @click="toggleFiltersModal">
        <template #icon>
          <IconClose
            v-if="isModalOpen"
            color="#9c9cb7"
            :width="16"
            :height="16"
          />
          <IconFilter v-else color="#9c9cb7" :width="16" :height="16" />
        </template>
        <template #label>
          <p v-if="isModalOpen">Fechar</p>
          <p v-else>Filtros</p>
        </template>
        <template #filtersQuantity>
          <span class="filters__quantity" v-if="filtersAppliedQuantity > 0"
            >({{ filtersAppliedQuantity }})</span
          >
        </template>
      </FilterButton>
    </div>
    <FilterModal :isOpen="isModalOpen">
      <FilterModalRole @chosenRole="updateRoleFilter" />
      <FilterModalDepartment @chosenDepartment="updateDepartmentFilter" />
      <FilterModalExperience @chosenExperience="updateExperienceFilter" />
    </FilterModal>
  </div>
  <p class="filters__not-found" v-if="filteredColaborators.length === 0">
    Nenhum colaborador encontrado.
  </p>
  <div v-else class="listing">
    <ListingCard
      v-for="colaborator in filteredColaborators"
      :colaborator-data="colaborator"
    />
  </div>
</template>

<script lang="ts" setup>
import type colaborator from "~/types/colaborator";

// --------------- data ----------------

const { data } = await useFetch("/api/colaborators");

const colaborators = data.value as colaborator[];

const isModalOpen = ref(false);

const filtersState = reactive<{
  search: string;
  department: string[];
  experience: string[];
  role: string[];
}>({
  search: "",
  department: [],
  experience: [],
  role: [],
});

// --------------- computed ----------------

const filteredColaborators = computed(() => {
  let colaboratorsBackup = colaborators;

  if (
    filtersState.experience.length > 0 ||
    filtersState.role.length > 0 ||
    filtersState.department.length > 0 ||
    filtersState.search.length > 0
  ) {
    colaboratorsBackup = colaboratorsBackup.filter((colaborator) => {
      console.log(filtersState.search);
      return (
        filtersState.experience.includes(colaborator.experience) ||
        filtersState.role.includes(colaborator.role) ||
        filtersState.department.includes(colaborator.department) ||
        (`${colaborator.name} ${colaborator.lastName}`
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(filtersState.search) &&
          filtersState.search !== "")
      );
    });
  }
  return colaboratorsBackup;
});

const filtersAppliedQuantity = computed(() => {
  return (
    filtersState.experience.length +
    filtersState.role.length +
    filtersState.department.length
  );
});

// --------------- methods ----------------

function toggleFiltersModal() {
  isModalOpen.value = !isModalOpen.value;
}

function updateSearchValue(text: string) {
  filtersState.search = text
    .trim()
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function updateExperienceFilter(chosenExperience: string) {
  if (!filtersState.experience.includes(chosenExperience))
    filtersState.experience.push(chosenExperience);
  else
    filtersState.experience = filtersState.experience.filter(
      (experience) => experience !== chosenExperience
    );
}

function updateRoleFilter(chosenRole: string) {
  if (!filtersState.role.includes(chosenRole))
    filtersState.role.push(chosenRole);
  else
    filtersState.role = filtersState.role.filter((role) => role !== chosenRole);
}

function updateDepartmentFilter(chosenDepartment: string) {
  if (!filtersState.department.includes(chosenDepartment))
    filtersState.department.push(chosenDepartment);
  else
    filtersState.department = filtersState.department.filter(
      (department) => department !== chosenDepartment
    );
}
</script>

<style scoped lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  gap: 8px;

  &__default {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
  }

  &__quantity {
    font-size: 14px;
    font-weight: 400;
    color: $dark;
  }

  &__not-found {
    width: fit-content;
    margin: 0 auto;
  }
}

.listing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  justify-content: center;
  gap: 12px;
}
</style>
