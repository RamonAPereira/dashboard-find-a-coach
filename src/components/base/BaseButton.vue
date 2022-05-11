<script lang="ts" setup>
const props = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },
  mode: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<template>
  <router-link
    v-if="props.link"
    :to="props.to"
    :class="props.mode"
    class="button"
  >
    <slot />
  </router-link>
  <button v-else :class="props.mode" class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  @apply bg-yellow-700 text-neutral-100 py-1 px-3 inline-block rounded-2xl max-w-fit;
}
.button--flat {
  @apply bg-transparent border-none text-yellow-700;
}

.button--outline {
  @apply border border-yellow-700 bg-transparent text-yellow-700 hover:bg-yellow-700 hover:bg-opacity-10;
}
</style>
