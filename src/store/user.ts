import { defineStore } from "pinia";
import { useCoaches } from "./coaches";

export const useUser = defineStore("user", {
  state: () => {
    return {
      currentUser: "c5" as String,
    };
  },
  getters: {
    isCoach: (state) => {
      return useCoaches().coaches.some(
        (coach) => coach.id === state.currentUser
      );
    },
  },
});
