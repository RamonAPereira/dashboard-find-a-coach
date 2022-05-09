import { defineStore } from "pinia";
import { Message } from "../types";
import { useUser } from "./user";

export const useRequests = defineStore("requests", {
  state: () => {
    return {
      requests: [] as Message[],
    };
  },
  getters: {
    hasRequests: (state) => {
      const coachID = useUser().currentUser;

      return state.requests.length > 0
        ? state.requests.filter((message) => message.id === coachID)
        : false;
    },
  },
  actions: {
    addRequest(request: Message) {
      this.requests.unshift(request);
    },
  },
});
