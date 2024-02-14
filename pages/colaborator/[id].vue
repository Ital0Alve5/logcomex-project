<template>
  <div class="profile__about">
    <div class="profile__image">
      <NuxtImg :src="colaboratorDetails?.image" width="200" height="200" />
    </div>
    <h1 class="profile__name">
      {{ `${colaboratorDetails?.name} ${colaboratorDetails?.lastName}` }}
    </h1>
    <p class="profile__role">
      {{ `${colaboratorDetails?.role} ${colaboratorDetails?.experience}` }}
    </p>
    <div class="profile__details">
      <section class="profile__detail">
        <h2>
          <IconPersonalData color="#465165" :width="24" :height="24" />
          Dados Pessoais
        </h2>
        <ul class="profile__detail-list">
          <li v-for="personalData in personalDataMap">
            <h3>{{ personalData.label }}</h3>
            <div>
              {{ personalData.value }}
            </div>
          </li>
        </ul>
      </section>
      <section class="profile__detail">
        <h2>
          <IconKnowledge color="#465165" :width="24" :height="24" />
          Habilidades
        </h2>
        <ul class="profile__detail-list">
          <li v-for="skill in colaboratorDetails.skills">
            {{ skill }}
          </li>
        </ul>
      </section>
      <section class="profile__detail">
        <h2>
          <IconIdioms color="#465165" :width="35" :height="24" />
          Idiomas
        </h2>
        <ul class="profile__detail-list">
          <li v-for="language in colaboratorDetails.languages">
            {{ language }}
          </li>
        </ul>
      </section>
      <section class="profile__detail">
        <h2>
          <IconHobbie color="#465165" :width="35" :height="24" />
          Hobbies
        </h2>
        <ul class="profile__detail-list">
          <li v-for="hobbie in colaboratorDetails.hobbies">
            {{ hobbie }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type colaborator from "~/types/colaborator";

// --------------- data ----------------

definePageMeta({
  layout: "colaborator",
});

const route = useRoute();

const { data } = await useFetch(`/api/colaborators/${route.params.id}`);

const colaboratorDetails = data.value as colaborator;

const personalDataMap = [
  {
    label: "Email",
    value: colaboratorDetails.email,
  },
  {
    label: "Telefone",
    value: colaboratorDetails.phone,
  },
  {
    label: "Endereço",
    value: colaboratorDetails.address,
  },
  {
    label: "Data de Nascimento",
    value: formatDate(colaboratorDetails.birthDate),
  },
];
</script>

<style scoped lang="scss">
.profile {
  &__about {
    position: absolute;
    top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__image {
    img {
      border-radius: 50%;
      border: 4px solid white;
    }
  }

  &__role {
    font-size: 16px;
    color:$primaryBackground;
    background: $dark;
    padding: 6px;
    border-radius: 12px;
  }

  &__name {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 4px;
  }

  &__details {
    margin-top: 64px;
    width: 100%;
    max-width: 1020px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  &__detail {
    margin-bottom: 40px;

    h2 {
      margin-bottom: 40px;
      border-bottom: 1px solid $primaryBorder;
      padding-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
      color: $dark;
    }

    &-list {
      & > li {
        border-radius: 8px;
        border: 1px solid #c0c0d6;
        background-color: #f5f6f8;
        padding: 20px;
        display: flex;
        position: relative;

        h3 {
          font-size: 16px;
          color: $dark;
          font-weight: 400;
          margin-bottom: 12px;
          padding: 0 4px;
          background: #f5f6f8;
          position: absolute;
          top: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }
      }

      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      width: 100%;
      max-width: 960px;
      text-align: center;

      @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
}
</style>
