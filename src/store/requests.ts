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
    async addRequest(request: Message) {
      const response = await fetch(
        `https://find-a-coach-dashboard-default-rtdb.firebaseio.com/requests/${request.id}.json`,
        { method: "POST", body: JSON.stringify(request) }
      );
      const data = await response.json();
    },
    async fetchRequests() {
      const coachID = useUser().currentUser;

      const response = await fetch(
        `https://find-a-coach-dashboard-default-rtdb.firebaseio.com/requests/${coachID}.json`
      );
      const data: Message[] = Object.values(await response.json());
      this.requests = data;
    },
  },
});
