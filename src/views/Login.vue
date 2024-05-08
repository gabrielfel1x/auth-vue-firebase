<template>
  <div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button>Login</button>
    </form>
    <div class="error" v-if="error">Error when logging in</div>
    <div>{{ messageError }}</div>
    <span
      >Need an account? Click Here to
      <router-link to="/register">register</router-link></span
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { User, Error } from "../types/types";

const email = ref<User["email"]>("");
const password = ref<User["password"]>("");
const error = ref<Error["message"]>(null);
const messageError = ref<string>("");

async function pressed() {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("logado fi, exquece!");
  } catch (err) {
    if (err == "auth/too-many-requests") {
      messageError.value =
        "Access temporarily disabled. Please try again later or reset your password.";
    }
    error.value = true;
    console.log(err);
  }
}
</script>
