<template>
  <div>
    <div v-if="error" class="error">Error when registering</div>
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
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

async function pressed() {
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
}
</script>

<style>
</style>