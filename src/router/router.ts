import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";
import { getAuth } from "firebase/auth";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Secret from "../views/Secret.vue";

interface Meta {
  requiresAuth?: boolean;
}

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    meta: { requiresAuth: true } as Meta,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
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
    next("/");
  } else {
    next();
  }
});

export default router;
