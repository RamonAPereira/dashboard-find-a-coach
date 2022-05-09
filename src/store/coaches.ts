import { defineStore } from "pinia";
import router from "../routes/router";
import { Coach, Filter } from "../types/index";

export const useCoaches = defineStore("coaches", {
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
  getters: {},
  actions: {
    hasCoaches(filters: Filter) {
      console.log(filters);
      const coaches = this.coaches;

      return coaches.filter((coach) => {
        if (filters.frontend && coach.areas.includes("frontend")) return true;
        if (filters.backend && coach.areas.includes("backend")) return true;
        if (filters.career && coach.areas.includes("career")) return true;
        return false;
      });
    },
    addNewCoach(newCoach: Coach) {
      this.coaches.push(newCoach);
      router.replace("/coaches");
    },
  },
});
