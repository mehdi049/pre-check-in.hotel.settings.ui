import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Settings from "../views/Settings.vue";
import ImageUpdate from "../views/ImageUpdate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/image-update",
    name: "ImageUpdate",
    component: ImageUpdate,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
