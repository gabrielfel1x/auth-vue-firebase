<template>
  <div class="font-bold">
    Logged In: <span v-if="loggedIn" class="text-greenColor">Yes</span
    ><span v-else class="text-redColor">No</span>
    <div>
      <button
        @click="signOutUser"
        class="font-bold bg-blackColor text-whiteColor mt-4"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

const loggedIn = ref(false);
const router = useRouter();

const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    loggedIn.value = false;
    router.push({ path: "/" });
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

<style scoped>
button:hover {
  @apply text-blackColor bg-whiteColor;
}
</style>
