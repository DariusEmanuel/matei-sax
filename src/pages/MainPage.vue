<script setup lang="ts">
import { computed } from "vue";

import LandingHero from "../components/LandingHero.vue";
import BioSection from "../components/sections/BioSection.vue";
import ListenSection from "../components/sections/ListenSection.vue";

import ImageSwiper from "../components/ImageSwiper.vue";

const imagesUnderBio = computed(() =>
  Array.from(
    { length: 10 },
    (_, i) =>
      new URL(`/src/assets/underBio/image${i + 1}.jpg`, import.meta.url).href
  )
);
</script>

<template>
  <landing-hero />
  <main>
    <bio-section />
    <image-swiper :images="imagesUnderBio" />
    <listen-section />
  </main>
</template>
