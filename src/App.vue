<template>
  <div class="flex flex-row items-center justify-center gap-64">
    <div class="left">
      <p class="font-bold text-lg mb-4">
        CURRENT PAGE:
        <span class="font-black text-secondary">{{ $route.name }}</span>
      </p>
      <TopHeader />
    </div>

    <div class="right bg-blackColor p-24">
      <p class="mb-12 font-bold text-lg">FORM</p>
      <nav class="w-full flex items-center justify-center gap-12 p-10 -mt-10">
        <RouterLink class="router-link" to="/">Login</RouterLink>
        <RouterLink class="router-link" to="/register">Register</RouterLink>
        <RouterLink class="router-link" to="/secret">Secret</RouterLink>
      </nav>

      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import TopHeader from "./components/TopHeader.vue";

export default {
  components: {
    TopHeader,
  },
};
</script>

<style>
.router-link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.router-link.router-link-exact-active {
  color: #42b983;
}

span {
  text-transform: uppercase;
}
</style>
