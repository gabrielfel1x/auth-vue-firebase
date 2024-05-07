<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
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
interface User {
  email: string;
  password: string;
}

interface Error {
  message: string;
}

const email = ref<string>("");
const password = ref<string>("");
const error = ref<Error | null>(null);

async function pressed(user: User) {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const createdUser = userCredential.user;
    console.log(`deu bom fml ${createdUser}`);
  } catch (err) {
    const error = err;
  }
}
</script>

<style>
</style>