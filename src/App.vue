<template>
  <div class="h-full">
    <LogOut class="absolute top-0 right-0 m-4" />
    <div
      class="absolute top-0 left-0 m-4 flex items-center justify-center gap-4"
    >
      <a
        class="text-sm text-secondary"
        href="http://github.com/gabrielfel1x"
        target="_blank"
      >
        GITHUB
      </a>
      <LangSwitcher />
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import LogOut from "./components/LogOut.vue";
// @ts-ignore
import LangSwitcher from "./components/LangSwitcher.vue";

export default {
  name: "App",
  components: {
    LogOut,
    LangSwitcher,
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
</style>
