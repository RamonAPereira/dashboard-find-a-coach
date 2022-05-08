<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { useCoaches } from "../../store/coaches";
import { Coach } from "../../types";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const coaches = useCoaches().coaches;
const currentCoach = ref<Coach>();

const fullName = computed(
  () => `${currentCoach.value?.firstName} ${currentCoach.value?.lastName}`
);
const contactLink = computed(() => `/coaches/${props.id}/contact`);

const findCurrentCoach = onMounted(
  () => (currentCoach.value = coaches.find((coach) => coach.id === props.id))
);
</script>

<template>
  <section>
    <BaseCard>
      <h2 class="coach__name">{{ fullName }}</h2>
      <h3 class="coach__payment">{{ currentCoach?.hourlyRates }}/hour</h3>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h2 class="section__title">Interested? Reach out now!</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <router-view></router-view>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge
        v-for="(area, index) in currentCoach?.areas"
        :key="index"
        :area="area"
      ></BaseBadge>
      <p>{{ currentCoach?.description }}</p>
    </BaseCard>
  </section>
</template>
