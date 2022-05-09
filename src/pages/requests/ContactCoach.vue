<script lang="ts" setup>
import { ref } from "vue";
import { Message } from "../../types/index";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const message = ref<Message>({
  email: "",
  message: "",
  isValid: true,
});

const validateMessage = function () {
  message.value.isValid = true;
  if (!message.value.email.match(emailRegex) || message.value.message === "") {
    message.value.isValid = false;
    return;
  }
};
const submitMessage = function () {
  validateMessage();
};
</script>

<template>
  <form @submit.prevent="submitMessage">
    <div>
      <label for="email">Your Email</label>
      <input type="email" id="email" v-model.trim="message.email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message.message"></textarea>
    </div>
    <div>
      <p v-if="message.isValid">Please enter a valid email and a message</p>
      <BaseButton>Send Message</BaseButton>
    </div>
  </form>
</template>
