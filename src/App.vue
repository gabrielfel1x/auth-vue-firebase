<template>
  <div>
    <TopHeader />
    <h1>Teste</h1>
    <p><strong>pagina atual:</strong> {{ $route.fullPath }}</p>
    <nav class="w-full flex items-center justify-center gap-12 p-10">
      <RouterLink to="/">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/secret">Secret</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";

export default {
  components: {
    TopHeader,
  },
};
</script>

<style>
</style>
