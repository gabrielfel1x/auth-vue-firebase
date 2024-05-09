<template>
  <div class="h-full">
    <div>
      <h1 class="font-semibold">Register</h1>
      <div v-if="flag" class="font-bold text-base text-secondary">
        Loading...
      </div>
      <div v-if="error" class="text-red-600">{{ msgError }}</div>
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
            :class="{ 'input-error': passwordError }"
            type="password"
            v-model="password"
            placeholder="password"
            class="input-style py-6 px-12"
          />
        </div>
        <div class="password m-2">
          <input
            :disabled="password === ''"
            :class="{ 'input-error': passwordError }"
            type="password"
            v-model="confirmPassword"
            placeholder="confirm password"
            class="input-style py-6 px-12"
          />
        </div>
        <div v-if="passwordError" class="text-red-600">
          Passwords do not match
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
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { User, Error } from "../types/types";

const route = useRouter();

const email = ref<User["email"]>("");
const password = ref<User["password"]>("");
const confirmPassword = ref<string>("");
const error = ref<Error["message"]>(null);
const msgError = ref<string>("");
const flag = ref<boolean>(false);
const passwordError = ref<boolean>(false);

async function pressed() {
  flag.value = true;
  error.value = null;
  if (confirmPassword.value !== password.value) {
    flag.value = false;
    passwordError.value = true;
    return;
  }
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    passwordError.value = false;
    const createdUser = userCredential.user;
    console.log(`deu bom fml ${createdUser}`);
    route.push("/home");
  } catch (err) {
    if ((err = "auth/email-already-in-use")) {
      msgError.value = "Email is already in use.";
      setTimeout(() => {
        msgError.value = "";
      }, 5000);
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

.input-error {
  border-color: red;
}
button:hover {
  color: #f9f9f9;
  background-color: #1a1a1a;
}
.dark {
  opacity: 0.3;
}
</style>