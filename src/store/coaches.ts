import { defineStore } from "pinia";
import Coach from "../types/index";

export const useCoaches = defineStore("main", {
  state: () => {
    return {
      coaches: <Coach[]>[
        {
          id: "c1",
          firstName: "Ramon",
          lastName: "Pereira",
          areas: ["frontend developer", "UI/UX Design"],
          description: "lorem ipsun",
          hourlyRates: 6,
        },
        {
          id: "c1",
          firstName: "Pedro",
          lastName: "Mendes",
          areas: ["Engenir", "Dentist"],
          description: "lorem ipsun dolor",
          hourlyRates: 12,
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
