<script setup>
import { onMounted, onUnmounted, useTemplateRef } from "vue";

const parallaxBackground = useTemplateRef("parallaxBackground");

const handleScroll = () => {
  if (parallaxBackground.value) {
    let scrollY = window.scrollY;
    parallaxBackground.value.style.transform = `translateY(${scrollY * 0.9}px)`;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="parallax">
    <div class="parallax__background" ref="parallaxBackground"></div>

    <div class="parallax__content">
      <img class="parallax__logo" src="../assets/msx-logo.png" />
      <h1 class="parallax__title">Matei Sax Official</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parallax {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120vh; /* Slightly larger to account for movement */
    background-image: url("../assets/hero/hero.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    will-change: transform;
    z-index: -1;
  }

  &__content {
    position: relative;
    text-align: center;
    color: var(--color);
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  &__logo {
    width: 240px;
    margin: 0 auto;
  }

  &__title {
    font-size: 2rem;
  }
}
</style>
