<script lang="ts" setup>
import { ref } from "vue";
import { Message } from "../../types/index";
import { useRequests } from "../../store/requests";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const requests = useRequests();
const message = ref<Message>({
  id: route.params.id as String,
  email: "",
  message: "",
  isValid: true,
});

const validateMessage = function () {
  message.value.isValid = true;
  if (!message.value.email.includes("@") || message.value.message === "") {
    message.value.isValid = false;
    return false;
  }
  return true;
};
const submitMessage = function () {
  if (!validateMessage()) return;
  requests.addRequest(message.value);
  router.replace("/coaches");
};
</script>

<template>
  <form @submit.prevent="submitMessage" class="form">
    <div class="form__control">
      <label for="email" class="form__label">Your Email</label>
      <input
        type="email"
        id="email"
        v-model.trim="message.email"
        class="form__input"
      />
    </div>
    <div class="form__control">
      <label for="message" class="form__label">Message</label>
      <textarea
        rows="5"
        id="message"
        v-model.trim="message.message"
        class="form__input"
      ></textarea>
    </div>
    <div class="form__action">
      <p v-if="!message.isValid" class="form__error">
        Please enter a valid email and a message
      </p>
      <BaseButton>Send Message</BaseButton>
    </div>
  </form>
</template>

<style scoped>
.form {
  @apply flex flex-col gap-4;
}
.form__control {
  @apply flex flex-col;
}

.form__input {
  @apply border focus:outline-yellow-600 focus:outline-1 focus:outline-none focus:bg-yellow-600 focus:bg-opacity-30;
}

.form__action {
  @apply flex flex-col items-center;
}
</style>
