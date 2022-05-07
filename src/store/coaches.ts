import { defineStore } from "pinia";

export const useCoaches = defineStore("main", {
  state: () => {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Ramon",
          lastName: "Pereira",
          areas: ["frontend developer", "UI/UX Design"],
          description: "lorem ipsun",
          hourlyRate: 6,
        },
        {
          id: "c1",
          firstName: "Pedro",
          lastName: "Mendes",
          areas: ["Engenir", "Dentist"],
          description: "lorem ipsun dolor",
          hourlyRate: 12,
        },
      ],
    };
  },
  getters: {
    hasCoaches: (state) => {
      return state.coaches ? state.coaches : false;
    },
  },
  actions: {},
});
