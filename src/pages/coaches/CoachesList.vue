<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { useCoaches } from "../../store/coaches";
import CoachItem from "../../components/coaches/CoachItem.vue";
import Coach from "../../types";

const coaches = useCoaches();

const displayCoaches = computed(() => coaches.hasCoaches);
</script>

<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul class="coach__list" v-if="displayCoaches">
      <CoachItem
        v-for="(coach, index) in displayCoaches"
        :key="index"
        :coach="coach"
      />
    </ul>
    <p v-else>No Coaches Found</p>
  </section>
</template>

<style scoped>
.coach__list {
  @apply flex flex-col justify-center items-center gap-4 px-2 my-4;
}
</style>
