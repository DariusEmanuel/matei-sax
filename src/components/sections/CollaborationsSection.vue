<script setup lang="ts">
import { useImagesStore } from "@/stores/imagesStore";
import { computed } from "vue";

const imagesStore = useImagesStore();

// duplicate images so the transition slide can work
const collabs = computed(() => [
  ...imagesStore.collaborations,
  ...imagesStore.collaborations,
]);
</script>
<template>
  <div class="collaborations">
    <div class="collaborations__subtitle">
      Matei Sax: Over 100+ Music Industry Collaborations and Counting
    </div>
    <div class="collaborations__logos">
      <div class="collaborations__track">
        <div
          v-for="({ url, alt, text }, index) in collabs"
          :key="index"
          class="collaborations__item"
        >
          <img :src="url" :alt="alt" loading="lazy" />
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@keyframes slide {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
}

.collaborations {
  &__subtitle {
    margin: 40px 0 10px;
    font-size: 1.1rem;
  }

  &__logos {
    overflow: hidden;
    padding: 30px 0;
    white-space: nowrap;
    position: relative;
  }

  &__logos:hover .collaborations__track {
    animation-play-state: paused;
  }

  &__logos::before,
  &__logos::after {
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  &__logos::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), #181818);
  }

  &__logos::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #181818);
  }

  &__track {
    display: flex;
    will-change: transform;
    width: max-content; // Ensures content is wide enough to scroll continuously
    animation: 20s slide infinite linear;
  }

  &__item {
    display: inline-block;
    margin: 0 15px;
    > img {
      height: 50px;
      border-radius: 50%;
      opacity: 0.8;
      image-rendering: optimizeQuality;
    }
  }
}
</style>
