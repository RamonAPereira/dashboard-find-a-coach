import { defineStore } from "pinia";
import { Message } from "../types";

export const useRequests = defineStore("requests", {
  state: () => {
    return {
      requests: [] as Message[], //typar
    };
  },
  getters: {
    hasRequests: (state) => {
      console.log(state.requests);
      return state.requests.length > 0 ? state.requests : false;
    },
  },
  actions: {
    addRequest(request: Message) {
      this.requests.unshift(request);
    },
  },
});
