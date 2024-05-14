<template>
  <div class="fade-in">
    <h1 class="font-bold">{{ $t("hello_message") }}</h1>
    <div class="text-base text-gray-400">
      {{ $t("project_description") }}
    </div>
    <div class="mt-10">
      <router-link class="text-base" to="/login">{{
        $t("login_button")
      }}</router-link>
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
