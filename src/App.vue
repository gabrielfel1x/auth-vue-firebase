<template>
  <div class="h-full">
    <LogOut class="absolute top-0 right-0 m-4" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
//@ts-ignore
import LogOut from "./components/LogOut.vue";

export default {
  name: "App",
  components: {
    LogOut,
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
