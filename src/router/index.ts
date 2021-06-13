import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Experiences from "@/components/Experiences.vue";
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: { layout: HomeLayout },
    component: Home,
  },
  {
    path: "/experiences",
    name: "Experiences",
    // meta: { layout: HomeLayout },
    component: Experiences,
  },
  {
    path: "/education",
    name: "Education",
    // meta: { layout: HomeLayout },
    component: Education,
  },
  {
    path: "/skills",
    name: "Skills",
    // meta: { layout: HomeLayout },
    component: Skills,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
