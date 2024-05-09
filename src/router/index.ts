import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { getAuth } from "firebase/auth";

import Initial from "../views/Initial.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Secret from "../views/Secret.vue";

interface Meta {
  requiresAuth?: boolean;
}

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Initial", component: Initial },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth: boolean = to.matched.some(
    (record) => (record.meta as Meta).requiresAuth
  );
  const auth = getAuth();
  const isAuthenticated: boolean | null = auth.currentUser !== null;
  console.log("isauthenticated?:", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
