<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Coach } from "../../types/index";

const props = defineProps({
  coach: {
    required: true,
    type: Object as PropType<Coach>,
  },
});

const fullName = computed(
  () => `${props.coach.firstName} ${props.coach.lastName}`
);
const paymentHour = computed(() => `${props.coach.hourlyRates}/hours`);
const coachContactLink = computed(() => `/coaches/${props.coach.id}/contact`);
const coachDetailsLink = computed(() => `/coaches/${props.coach.id}`);
</script>

<template>
  <li class="coach">
    <h3 class="coach__name">{{ fullName }}</h3>
    <h4 class="coach__payment">{{ paymentHour }}</h4>
    <ul>
      <BaseBadge
        v-for="(area, index) in props.coach.areas"
        :key="index"
        :area="area"
      >
      </BaseBadge>
    </ul>
    <div class="coach__controls">
      <BaseButton link :to="coachContactLink" mode="button--outline"
        >Contact</BaseButton
      >
      <BaseButton link :to="coachDetailsLink">Coach Details</BaseButton>
    </div>
  </li>
</template>

<style scoped>
.coach {
  @apply border border-black rounded-xl p-4 w-full;
}
.coach__controls {
  @apply flex  justify-end gap-4 my-2;
}
</style>
