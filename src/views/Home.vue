<template>
  <div class="fade-in">
    <div class="text-2xl font-bold text-secondary">Welcome!!</div>
    <div v-if="userEmail" class="text-base text-gray-400">
      Logged in as: {{ userEmail }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";

export default {
  setup() {
    const userEmail = ref<string | null>(null);

    onMounted(() => {
      const auth = getAuth();
      if (auth.currentUser) {
        userEmail.value = auth.currentUser.email;
      }
    });

    return {
      userEmail,
    };
  },
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 5s ease;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
