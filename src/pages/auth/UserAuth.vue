<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { newUser } from "../../types";
import { useUser } from "../../store/user";
import router from "../../routes/router";

const user = useUser();
const userInputs = ref<newUser>({
  password: "",
  email: "",
});
const inputsAreValid = ref<boolean>(true);
const mode = ref<String>("login");

const buttonCaption = computed(() => {
  return mode.value === "login" ? "Login" : "Signup";
});
const modeButtonCaption = computed(() => {
  return mode.value === "login" ? "Signup instead" : "Login instead";
});

const submitForm = async function () {
  try {
    inputsAreValid.value = true;
    if (
      userInputs.value.email === "" ||
      !userInputs.value.email.includes("@") ||
      userInputs.value.password.length < 1
    ) {
      inputsAreValid.value = false;
      return;
    }

    if (mode.value === "login") {
      await user.login(userInputs.value);
    } else {
      await user.signup(userInputs.value);
    }
    router.replace("/coaches");
  } catch (err) {
    console.log(err);
  }
};
const switchAuthMode = function () {
  if (mode.value === "login") {
    mode.value = "signup";
  } else {
    mode.value = "login";
  }
};
</script>

<template>
  <BaseCard>
    <form class="form" @submit.prevent="submitForm">
      <div class="form__control">
        <label for="email" class="form__label">E-mail</label>
        <input
          type="email"
          id="email"
          class="form__input"
          v-model.trim="userInputs.email"
        />
      </div>
      <div class="form__control">
        <label for="password" class="form__label">Password</label>
        <input
          type="password"
          id="password"
          class="form__input"
          v-model.trim="userInputs.password"
        />
      </div>
      <div class="form__actions">
        <p v-if="!inputsAreValid" class="form__error">
          Please enter a valid email and password
        </p>
        <BaseButton>{{ buttonCaption }}</BaseButton>
        <BaseButton type="button" mode="button--flat" @click="switchAuthMode">{{
          modeButtonCaption
        }}</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<style scoped>
.form__actions {
  @apply mt-2;
}
</style>
