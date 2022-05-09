<script lang="ts" setup>
import { useRequests } from "../../store/requests";
import RequestItem from "../../components/requests/RequestItem.vue";

const requests = useRequests();
</script>

<template>
  <section>
    <BaseCard>
      <header class="text-center">
        <h2 class="section__title mb-4">Requests Received</h2>
      </header>
      <ul v-if="requests.hasRequests" class="message__list">
        <RequestItem
          v-for="(message, index) in requests.requests"
          :key="index"
          :message="message"
        />
      </ul>
      <h3 v-else>You don't have any Requests</h3>
    </BaseCard>
  </section>
</template>

<style scoped>
.message__list {
  @apply flex flex-col gap-4;
}
</style>
