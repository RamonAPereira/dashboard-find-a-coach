<template>
  <header class="header">
    <nav class="navigation">
      <h1 class="navigation__title">
        <router-link to="/">Find a Coach</router-link>
      </h1>
      <ul class="navigation__links">
        <li>
          <router-link class="navigation__link" to="/coaches">
            All Coaches
          </router-link>
        </li>
        <li>
          <router-link class="navigation__link" to="/requests">
            Requests
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply w-full h-24 bg-yellow-600 flex justify-center items-center;
}

.navigation {
  @apply container flex flex-col gap-1 justify-center items-center sm:justify-between sm:flex-row;
}

.navigation__title {
  @apply font-bold text-2xl text-neutral-100;
}

.navigation__links {
  @apply flex gap-4;
}

.navigation__link {
  @apply py-2 px-4 text-neutral-100 text-lg inline-block border border-transparent;
}

.navigation__link.router-link-active {
  @apply border border-neutral-100;
}
</style>
