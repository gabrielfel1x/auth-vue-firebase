<template>
  <div class="font-bold">
    {{ $t("logged_in") }}
    <span v-if="loggedIn" class="text-greenColor">{{
      $t("logged_in_yes")
    }}</span>
    <span v-else class="text-redColor">{{ $t("logged_in_no") }}</span>
    <div>
      <button
        @click="signOutUser"
        class="font-bold bg-blackColor text-whiteColor mt-4"
      >
        {{ $t("sign_out") }}
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
    router.push({ path: "/login" });
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
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
