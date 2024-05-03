import { createMemoryHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Secret from "../views/Secret.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/secret", component: Secret },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
