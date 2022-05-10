<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity";
import { useCoaches } from "../../store/coaches";
import { useUser } from "../../store/user";
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
import { Coach, Filter } from "../../types/index";
import { onMounted } from "vue";

const coaches = useCoaches();
const user = useUser();
const activeFilters = ref<Filter>({
  frontend: true,
  backend: true,
  career: true,
});

const displayCoaches = computed<Coach[] | boolean>(() =>
  coaches.hasCoaches(activeFilters.value)
);

const setFilters = function (updatedFilters: Filter) {
  activeFilters.value = updatedFilters;
};
const loadCoaches = function () {
  coaches.fetchCoaches();
};

onMounted(loadCoaches);
</script>

<template>
  <section>
    <CoachFilter @change-filter="setFilters" />
  </section>

  <section>
    <BaseCard>
      <div class="coach__controls">
        <BaseButton mode="button--outline" @click="loadCoaches"
          >Refresh</BaseButton
        >
        <BaseButton v-if="!user.isCoach" link to="/register"
          >Register as Coach</BaseButton
        >
      </div>
      <ul class="coach__list" v-if="displayCoaches">
        <CoachItem
          v-for="(coach, index) in displayCoaches"
          :key="index"
          :coach="(coach as Coach)"
        />
      </ul>
      <p v-else>No Coaches Found</p>
    </BaseCard>
  </section>
</template>

<style scoped>
.coach__controls {
  @apply flex justify-between;
}
.coach__list {
  @apply flex flex-col justify-center items-center gap-4 my-4;
}
</style>
