import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes/router";
import "./assets/css/index.css";
import App from "./App.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseBadge from "./components/base/BaseBadge.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);
app.component("BaseBadge", BaseBadge);

app.mount("#app");
