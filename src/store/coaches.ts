import { defineStore } from "pinia";
import router from "../routes/router";
import { Coach, Filter } from "../types/index";

export const useCoaches = defineStore("coaches", {
  state: () => {
    return {
      coaches: <Coach[]>[],
    };
  },
  getters: {},
  actions: {
    hasCoaches(filters: Filter) {
      const coaches = this.coaches;

      if (coaches[0]) {
        return coaches.filter((coach) => {
          if (filters.frontend && coach.areas.includes("frontend")) return true;
          if (filters.backend && coach.areas.includes("backend")) return true;
          if (filters.career && coach.areas.includes("career")) return true;
          return false;
        });
      } else {
        return false;
      }
    },
    async addNewCoach(newCoach: Coach) {
      const response = await fetch(
        `https://find-a-coach-dashboard-default-rtdb.firebaseio.com/coaches/${newCoach.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(newCoach),
        }
      );

      if (!response.ok) {
        console.error("alguma coisa deu errado");
      }

      this.coaches.push(newCoach);
      router.replace("/coaches");
    },
    async fetchCoaches() {
      try {
        const response = await fetch(
          "https://find-a-coach-dashboard-default-rtdb.firebaseio.com/coaches.json"
        );
        const data: Coach[] = Object.values(await response.json());

        this.coaches = data;
      } catch {
        console.error("Data precisa de pelo menos um coach no servidor");
      }
    },
  },
});
