import { defineStore } from "pinia";
import { useCoaches } from "./coaches";
import { newUser, User } from "../types";
import router from "../routes/router";

export const useUser = defineStore("user", {
  state: () => {
    return {
      currentUser: {
        token: null,
        userId: null,
        tokenExpiration: null,
      } as User,
    };
  },
  getters: {
    isCoach: (state) => {
      return useCoaches().coaches.some(
        (coach) => coach.id === state.currentUser.userId
      );
    },
    isLogged: (state) => {
      return state.currentUser.token === null ? false : true;
    },
  },
  actions: {
    async signup(newUser: newUser) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCl33wX8UoYpuZwhjyH5Ko2IBynnzMqCG4",
          {
            method: "POST",
            body: JSON.stringify({
              email: newUser.email,
              password: newUser.password,
              returnSecureToken: true,
            }),
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed");
        }

        console.log(data);
        this.currentUser = {
          token: data.idToken,
          userId: data.localId,
          tokenExpiration: data.expiresIn,
        };
      } catch {
        console.log("aqui");
      }
    },
    async login(newUser: newUser) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCl33wX8UoYpuZwhjyH5Ko2IBynnzMqCG4",
        {
          method: "POST",
          body: JSON.stringify({
            email: newUser.email,
            password: newUser.password,
            returnSecureToken: true,
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed");
      }

      console.log(data);
      this.currentUser = {
        token: data.idToken,
        userId: data.localId,
        tokenExpiration: data.expiresIn,
      };
    },
    logout() {
      this.$reset();
      router.replace("/auth");
    },
  },
});
