<script setup lang="ts">
import { RouterView } from "vue-router";
import MsxNavbar from "./components/MsxNavbar.vue";
</script>

<template>
  <MsxNavbar />
  <RouterView />
</template>

<style>
@font-face {
  font-family: Galvji;
  src: url("@/assets/fonts/galvji.ttf");
}

@font-face {
  font-family: GalvjiBold;
  src: url("@/assets/fonts/galvji-bold.ttf");
}

*,
html,
body {
  font-family: Galvji;
}
</style>
