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
</style>
