import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.ts";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8bIZR-5Z7dezKnyfyTyP-KE5ICTfAGyI",
  authDomain: "vue-auth-bb737.firebaseapp.com",
  projectId: "vue-auth-bb737",
  storageBucket: "vue-auth-bb737.appspot.com",
  messagingSenderId: "696971601151",
  appId: "1:696971601151:web:7c252d553e01f36a8518ca",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

auth.onAuthStateChanged((user) => {
  console.log("user", user);
  createApp(App).use(router).mount("#app");
});
