<script lang="ts" setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  area: {
    type: String,
    required: false,
  },
});

const text = computed(() => props.area.toUpperCase());
const type = computed(() => `badge--${props.area}`);
</script>

<template>
  <li class="badge" :class="type">
    {{ text }}
  </li>
</template>

<style scoped>
.badge {
  @apply rounded-3xl py-2 px-6 inline-block mr-2;
}

.badge--frontend {
  @apply bg-yellow-600 text-neutral-100;
}
.badge--backend {
  @apply bg-yellow-700 text-neutral-100;
}
.badge--career {
  @apply bg-yellow-800 text-neutral-100;
}
</style>
