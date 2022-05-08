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
          areas: ["frontend", "backend"],
          description: "lorem ipsun",
          hourlyRates: 6,
        },
        {
          id: "c1",
          firstName: "Pedro",
          lastName: "Mendes",
          areas: ["frontend", "career"],
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
