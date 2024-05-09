<template>
  <div class="fade-in">
    <h1 class="font-bold">Hello!</h1>
    <div class="text-base text-gray-400">
      This is an authentication project using Firebase, click below to log in.
    </div>
    <div class="mt-10">
      <router-link class="text-base" to="/login">LOGIN</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
</style>;
