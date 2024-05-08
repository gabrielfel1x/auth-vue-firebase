<template>
  <div>
    Logged In: <span v-if="loggedIn">Yes</span><span v-else>No</span>
    <div>
      <button @click="signOutUser">Sign Out</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const loggedIn = ref(false);

const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    loggedIn.value = false;
    console.log("Deslogado com sucesso");
  } catch (error) {
    console.error("Erro ao deslogar:", error);
  }
};

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    loggedIn.value = !!user;
  });
});
</script>

<style>
</style>
