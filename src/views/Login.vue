<template>
  <div class="h-full">
    <div v-if="flag" class="font-bold">Loading...</div>
    <div class="flex flex-col" v-else>
      <h1 class="font-semibold">Login</h1>
      <form @submit.prevent="pressed">
        <div class="email m-2">
          <input
            type="email"
            v-model="email"
            placeholder="email"
            class="input-style py-6 px-12"
          />
        </div>
        <div class="password m-2">
          <input
            type="password"
            v-model="password"
            placeholder="password"
            class="input-style py-6 px-12"
          />
        </div>
        <button class="m-2 text-blackColor bg-whiteColor font-bold">
          Login
        </button>
      </form>
      <div class="error" v-if="error">Error when logging in</div>
      <div>{{ messageError }}</div>
      <span class="mt-4"
        >Need an account? Click Here to
        <router-link to="/register">Register</router-link>.</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { User, Error } from "../types/types";

const email = ref<User["email"]>("");
const password = ref<User["password"]>("");
const error = ref<Error["message"]>(null);
const messageError = ref<string>("");
const flag = ref<boolean>(false);

const router = useRouter();

async function pressed() {
  flag.value = true;
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/home");
  } catch (err) {
    if (err == "auth/too-many-requests") {
      messageError.value =
        "Access temporarily disabled. Please try again later or reset your password.";
    }
    error.value = true;
    console.log(err);
  }
  flag.value = false;
}
</script>

<style scoped>
.input-style {
  outline: none;
  border: 2px solid transparent;
  transition: border-color 0.8s ease;
}

.input-style:focus {
  border-color: #42b983;
}
button:hover {
  color: #f9f9f9;
  background-color: #1a1a1a;
}
</style>