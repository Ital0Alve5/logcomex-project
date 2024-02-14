<template>
  <NuxtLink :to="`/colaborator/${colaboratorData?.id}`" class="card">
    <ul class="card__list">
      <li class="card__image">
        <NuxtImg :src="colaboratorData?.image" width="100" height="100" />
      </li>
      <li class="card__attributes" v-for="data in dataList">
        {{
          data.value === "name"
            ? `${colaboratorData[data?.value]} ${colaboratorData?.lastName}`
            : colaboratorData[data?.value]
        }}
      </li>
    </ul>
  </NuxtLink>
</template>

<script lang="ts" setup>
// --------------- props ----------------

defineProps({
  colaboratorData: {
    type: Object,
    required: true,
  },
});

// --------------- data ----------------

const dataList = [
  { label: "Nome", value: "name" },
  { label: "Cargo", value: "role" },
  { label: "Experiência", value: "experience" },
];
</script>

<style scoped lang="scss">
.card {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: fit-content;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid $primaryBorder;
  background-color: $primaryBackground;
  font-size: 14px;
  font-weight: 400;
  color: $dark;

  &:hover {
    background-color: $primaryBorderHover;
  }

  &__image {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    img {
      border-radius: 50%;
      border: 1px solid $dark;
    }
  }

  &__attributes {
    display: flex;
    justify-content: center;
    font-size: 16px;
    margin-bottom: 4px;

    &:nth-child(2) {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 10px;
    }
  }

  &__details {
    margin-top: 16px;
  }
}
</style>
