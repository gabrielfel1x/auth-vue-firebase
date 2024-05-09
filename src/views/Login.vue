<template>
  <div class="h-full">
    <div class="flex flex-col">
      <h1 class="font-semibold">Login</h1>
      <div v-if="flag" class="font-bold text-base text-secondary">
        Loading...
      </div>
      <form @submit.prevent="pressed" :class="{ 'animate-pulse': flag }">
        <div class="email m-2">
          <input
            :disabled="flag"
            type="email"
            v-model="email"
            placeholder="email"
            class="input-style py-6 px-12"
          />
        </div>
        <div class="password m-2">
          <input
            :disabled="flag"
            type="password"
            v-model="password"
            placeholder="password"
            class="input-style py-6 px-12"
          />
        </div>
        <button
          class="m-2 text-blackColor bg-whiteColor font-bold"
          :class="{ spinBg: flag }"
        >
          <Spin v-if="flag" />
          <span v-else>Login</span>
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
import Spin from "@/components/Spin.vue";
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

.spinBg {
  background-color: #1a1a1a;
  outline: none;
  border: none;
}
</style>