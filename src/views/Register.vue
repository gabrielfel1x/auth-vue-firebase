<template>
  <div class="h-full">
    <div v-if="flag" class="font-bold">Loading...</div>
    <div v-else>
      <h1 class="font-semibold">Register</h1>
      <div v-if="error" class="text-red-600">Error when registering</div>
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
        <button
          type="submit"
          class="m-2 text-blackColor bg-whiteColor font-bold"
        >
          Register
        </button>
      </form>
      <div class="mt-4">
        <span
          >Already have an account?
          <router-link to="/login">Login</router-link>.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { User, Error } from "../types/types";

const email = ref<User["email"]>("");
const password = ref<User["password"]>("");
const error = ref<Error["message"]>(null);
const flag = ref<boolean>(false);

async function pressed() {
  flag.value = true;
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const createdUser = userCredential.user;
    console.log(`deu bom fml ${createdUser}`);
  } catch (err) {
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