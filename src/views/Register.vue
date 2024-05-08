<template>
  <div v-if="flag" class="font-bold">Loading...</div>
  <div>
    <div v-if="error" class="error">Error when registering</div>
    <form @submit.prevent="pressed">
      <div class="email m-2">
        <input
          type="email"
          v-model="email"
          placeholder="email"
          class="py-6 px-12"
        />
      </div>
      <div class="password m-2">
        <input
          type="password"
          v-model="password"
          placeholder="password"
          class="py-6 px-12"
        />
      </div>
      <button type="submit" class="m-2 text-blackColor bg-whiteColor font-bold">
        Register
      </button>
    </form>
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
button:hover {
  @apply bg-blackColor text-whiteColor;
}
</style>