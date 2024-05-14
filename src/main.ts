import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createI18n } from "vue-i18n";
import { en } from "./locales/en";
import { pt } from "./locales/pt_BR";

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

const languages = {
  en,
  pt,
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: languages,
});

const app = createApp({});

auth.onAuthStateChanged((user) => {
  console.log("user", user);
  createApp(App).use(router).use(i18n).mount("#app");
});
