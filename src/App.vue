<template>
  <h1>Teste</h1>
  <p><strong>pagina atual:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Login</RouterLink>
    <RouterLink to="/register">Go to Register</RouterLink>
    <RouterLink to="/secret">Go to Secret</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
</script>

<style>
</style>
