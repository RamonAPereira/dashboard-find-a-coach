<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Message } from "../../types";
const props = defineProps({
  message: {
    type: Object as PropType<Message>,
    required: true,
  },
});

const emailLink = computed(() => `mailto:${props.message.email}`);
</script>

<template>
  <li class="message">
    <div>
      <a :href="emailLink" class="message__email"> {{ message.email }} </a>
    </div>
    <p>{{ message.message }}</p>
  </li>
</template>

<style scoped>
.message {
  @apply border p-4;
}
.message__email {
  @apply text-yellow-700;
}
</style>
