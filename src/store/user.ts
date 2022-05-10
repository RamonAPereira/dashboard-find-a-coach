import { defineStore } from "pinia";
import { useCoaches } from "./coaches";

export const useUser = defineStore("user", {
  state: () => {
    return {
      currentUser: new Date().getMilliseconds().toString() as String,
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
