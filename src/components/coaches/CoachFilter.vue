<script lang="ts" setup>
import { reactive } from "vue";
import { Filter } from "../../types/index";

const emit = defineEmits(["change-filter"]);

let filters = reactive<Filter>({
  frontend: true,
  backend: true,
  career: true,
});

const setFilter = function (e: any) {
  const inputId = e.target.id;
  const isActive = e.target.checked;
  const updatedFilters: Filter = {
    ...filters,
    [inputId]: isActive,
  };
  filters = updatedFilters;
  emit("change-filter", updatedFilters);
};
</script>

<template>
  <BaseCard>
    <h2 class="section__title">Find Your Coach</h2>
    <div class="filter__control">
      <div class="filter__option">
        <input type="checkbox" id="frontend" checked @change="setFilter" />
        <label for="frontend">Frontend</label>
      </div>
      <div class="filter__option">
        <input type="checkbox" id="backend" checked @change="setFilter" />
        <label for="backend">Backend</label>
      </div>
      <div class="filter__option">
        <input type="checkbox" id="career" checked @change="setFilter" />
        <label for="career">Career</label>
      </div>
    </div>
  </BaseCard>
</template>

<style scoped>
.filter__control {
  @apply flex gap-4 mt-1;
}
.filter__option {
  @apply flex gap-1 items-center;
}
</style>
