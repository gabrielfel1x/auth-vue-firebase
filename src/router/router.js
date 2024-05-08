import { createMemoryHistory, createRouter } from "vue-router";
import { getAuth } from "firebase/auth";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Secret from "../views/Secret.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const auth = getAuth();
  const isAuthenticated = auth.currentUser;
  console.log("isauthenticated?:", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
