<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  @apply rounded-xl shadow-xl p-4 mx-auto my-8 max-w-2xl;
}
</style>
