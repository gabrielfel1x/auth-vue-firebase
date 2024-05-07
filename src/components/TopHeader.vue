<template>
  <div>
    Logged In: <span v-if="loggedIn">Yes</span><span v-else>No</span>
    <div>
      <button @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script lang="ts">
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.loggedIn = !!user;
    });
  },
  methods: {
    async signOut() {
      try {
        const auth = getAuth();
        await signOut(auth);
        this.loggedIn = false;
        console.log("Deslogado com sucesso");
      } catch (error) {
        console.error("Erro ao deslogar:", error);
      }
    },
  },
};
</script>


<style>
</style>