<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const parallaxBackground = ref(null);
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (parallaxBackground.value) {
        let scrollY = window.scrollY;
        parallaxBackground.value.style.transform = `translateY(${
          scrollY * 0.5
        }px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function onArrowClick(e) {
  e.preventDefault();
  window.scrollBy({
    top: 500,
    left: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="parallax">
    <div class="parallax__background" ref="parallaxBackground"></div>

    <div class="parallax__content">
      <img class="parallax__logo" src="../assets/msx-logo.png" />
      <h1 class="parallax__title">Matei Sax Official</h1>

      <div class="arrow bounce">
        <a class="fa fa-arrow-down fa-2x" href="#" @click="onArrowClick"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bg-color: #2d2d37; // Dark blue
$primary-color: #fd6b21; // Orange

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
    height: 110vh;
    background-image: url("../assets/hero/ATS_6029.JPG");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    will-change: transform;
    transform: translate3d(0, 0, 0); /* GPU acceleration */
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

// TODO: FIX THIS CSS: MAKE IT USE BEM
a {
  color: white;
  text-decoration: none;
  width: 50px;
  height: 50px;
  display: block;
  -webkit-tap-highlight-color: transparent !important;

  outline: none !important;
}

.arrow {
  position: absolute;
  top: 80%;
  text-align: center;
  z-index: 1;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
