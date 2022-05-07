import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "../pages/coaches/CoachDetail.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachRegistration from "../pages/coaches/CoachRegistration.vue";
import ContactCoach from "../pages/requests/ContactCoach.vue";
import RequestsReceives from "../pages/requests/RequestsReceives.vue";
import NotFound from "../pages/requests/NotFound.vue";

const routes = [
  { path: "/", redirect: "/coaches" },
  { path: "/coaches", component: CoachesList },
  {
    path: "/coaches/:id",
    component: CoachDetail,
    children: [{ path: "contact", component: ContactCoach }],
  },
  { path: "/register", component: CoachRegistration },
  { path: "/request", component: RequestsReceives },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
