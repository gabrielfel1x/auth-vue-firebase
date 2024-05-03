import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8bIZR-5Z7dezKnyfyTyP-KE5ICTfAGyI",
  authDomain: "vue-auth-bb737.firebaseapp.com",
  projectId: "vue-auth-bb737",
  storageBucket: "vue-auth-bb737.appspot.com",
  messagingSenderId: "696971601151",
  appId: "1:696971601151:web:7c252d553e01f36a8518ca",
};

const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
