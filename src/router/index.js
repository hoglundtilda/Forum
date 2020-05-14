import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../views/Start.vue";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/home",
    name: "Home",
    meta: { requiresAuth: true },
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    meta: { requiresAuth: true },
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem("user_id")) {
      next();
    } else {
      next({ name: "Start" });
    }
  } else {
    next();
  }
});

export default router;
