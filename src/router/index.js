import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/",
      name: "login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
