import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Landingpage",
      index: 1,
      component: () => import("./views/mains/Landingpage.vue"),
    },
    {
      path: "/about",
      name: "About",
      index: 2,
      component: () => import("./views/mains/About.vue"),
    },
    {
      path: "/mainfeed",
      name: "Mainfeed",
      index: 3,
      component: () => import("./views/mains/Mainfeed.vue"),
    },
    {
      path: "/expuploaderimg",
      name: "Uploaderimg",
      index: 4,
      component: () => import("./views/experimental/Uploaderimg.vue"),
    },
    {
      path: "/admindashboard",
      name: "Dashboard",
      index: 5,
      component: () => import("./views/admin/Dashboard.vue"),
    },
    {
      path: "/expcrudpost",
      name: "Expcrudpost",
      index: 6,
      component: () => import("./views/experimental/Expcrudpost.vue"),
    },
    {
      path: "/post/:idpost",
      name: "Showpost",
      index: 7,
      component: () => import("./views/posts/Showpost.vue"),
    },

    {
      path: "/uploadtest",
      name: "Uploaderimg",
      index: 9,
      component: () => import("./views/experimental/Uploaderimg.vue"),
    },
    {
      path: "/myprofil",
      name: "Myprofil",
      index: 10,
      component: () => import("./views/profils/Myprofil.vue"),
    },
  ],
  mode: "history",
});
