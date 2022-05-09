import { defineStore } from "pinia";
import { Message } from "../types";

export const useRequests = defineStore("requests", {
  state: () => {
    return {
      requests: [] as Message[], //typar
    };
  },
  actions: {
    addRequest(request: Message) {
      this.requests.unshift(request);
    },
  },
});
