<script lang="ts" setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <router-view />
</template>

<style>
.section__title {
  @apply font-bold text-xl;
}

.coach__name {
  @apply font-bold text-2xl;
}

.coach__payment {
  @apply font-bold;
}

.form__control {
  @apply flex flex-col gap-2;
}

.form__input {
  @apply border focus:outline-yellow-600 focus:outline-1 focus:outline-none focus:bg-yellow-600 focus:bg-opacity-30;
}

.form__input--error {
  @apply border-red-600;
}

.form__label {
  @apply font-bold;
}

.form__error {
  @apply text-red-600;
}
</style>
