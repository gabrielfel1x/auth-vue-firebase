<template>
  <div class="fade-in">
    <div class="text-2xl font-bold text-secondary">
      {{ $t("welcome_message") }}
    </div>
    <div v-if="userEmail" class="text-base text-gray-400">
      {{ $t("logged_in_as") }}: {{ userEmail }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const userEmail = ref<string | null>(null);

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          userEmail.value = user.email;
        } else {
          userEmail.value = null;
        }
      });
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
