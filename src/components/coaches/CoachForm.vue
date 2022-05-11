<script lang="ts" setup>
import { ref } from "vue";
import { Coach, RegisterInputs } from "../../types";
import { useCoaches } from "../../store/coaches";
import { useUser } from "../../store/user";

const coaches = useCoaches();
const user = useUser();
const coachInputs = ref<RegisterInputs>({
  firstName: {
    value: "",
    isValid: true,
  },
  lastName: {
    value: "",
    isValid: true,
  },
  description: {
    value: "",
    isValid: true,
  },
  rate: {
    value: 0,
    isValid: true,
  },
  areas: {
    value: [],
    isValid: true,
  },
  formIsValid: true,
});

const validateForm = function () {
  if (coachInputs.value.firstName.value === "") {
    coachInputs.value.firstName.isValid = false;
    coachInputs.value.formIsValid = false;
  } else {
    coachInputs.value.firstName.isValid = true;
  }
  if (coachInputs.value.lastName.value === "") {
    coachInputs.value.lastName.isValid = false;
    coachInputs.value.formIsValid = false;
  } else {
    coachInputs.value.lastName.isValid = true;
  }
  if (coachInputs.value.description.value === "") {
    coachInputs.value.description.isValid = false;
    coachInputs.value.formIsValid = false;
  } else {
    coachInputs.value.description.isValid = true;
  }
  if (!coachInputs.value.rate.value || coachInputs.value.rate.value < 0) {
    coachInputs.value.rate.isValid = false;
    coachInputs.value.formIsValid = false;
  } else {
    coachInputs.value.rate.isValid = true;
  }
  if (coachInputs.value.areas.value.length === 0) {
    coachInputs.value.areas.isValid = false;
    coachInputs.value.formIsValid = false;
  } else {
    coachInputs.value.areas.isValid = true;
  }
};
const submitNewCoach = function () {
  coachInputs.value.formIsValid = true;
  validateForm();
  if (!coachInputs.value.formIsValid) {
    return;
  }
  const newCoach: Coach = {
    id: user.currentUser.userId as String,
    firstName: coachInputs.value.firstName.value,
    lastName: coachInputs.value.lastName.value,
    areas: coachInputs.value.areas.value,
    description: coachInputs.value.description.value,
    hourlyRates: coachInputs.value.rate.value,
  };
  coaches.addNewCoach(newCoach);
};
</script>

<template>
  <form @submit.prevent="submitNewCoach" class="form">
    <div class="form__control">
      <label for="firstname" class="form__label">First Name</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="coachInputs.firstName.value"
        class="form__input"
        :class="{ 'form__input--error': !coachInputs.firstName.isValid }"
      />
      <p v-if="!coachInputs.firstName.isValid" class="form__error">
        First name can't be empty
      </p>
    </div>
    <div class="form__control">
      <label for="lastname" class="form__label">Last Name</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="coachInputs.lastName.value"
        class="form__input"
        :class="{ 'form__input--error': !coachInputs.lastName.isValid }"
      />
      <p v-if="!coachInputs.lastName.isValid" class="form__error">
        Last name can't be empty
      </p>
    </div>
    <div class="form__control">
      <label for="description" class="form__label">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="coachInputs.description.value"
        class="form__input"
        :class="{ 'form__input--error': !coachInputs.description.isValid }"
      ></textarea>
      <p v-if="!coachInputs.description.isValid" class="form__error">
        Description can't be empty
      </p>
    </div>
    <div class="form__control">
      <label for="rate" class="form__label">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="coachInputs.rate.value"
        class="form__input"
        :class="{ 'form__input--error': !coachInputs.rate.isValid }"
      />
      <p v-if="!coachInputs.rate.isValid" class="form__error">
        Hourly rate can't be zero or negative
      </p>
    </div>
    <div class="form__control">
      <h3 class="form__label">Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          value="frontend"
          id="frontend"
          v-model="coachInputs.areas.value"
        />
        <label for="frontend" class="form__label">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="backend"
          id="backend"
          v-model="coachInputs.areas.value"
        />
        <label for="backend" class="form__label">Backend</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="career"
          id="career"
          v-model="coachInputs.areas.value"
        />
        <label for="career" class="form__label">Career</label>
      </div>
      <p v-if="!coachInputs.areas.isValid" class="form__error">
        Select at least one expertise
      </p>
    </div>
    <p v-if="!coachInputs.formIsValid">Please fix the above errors</p>
    <BaseButton>Register as Coach</BaseButton>
  </form>
</template>

<style scoped></style>
