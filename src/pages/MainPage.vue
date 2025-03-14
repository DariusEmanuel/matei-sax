<script setup lang="ts">
import { useImagesStore } from "@/imagesStore";

// landing
import LandingHero from "@/components/LandingHero.vue";

// sections
import BioSection from "@/components/sections/BioSection.vue";
import ListenSection from "@/components/sections/ListenSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import LiveShowsSection from "@/components/sections/LiveShowsSection.vue";

// helper components
import ImageSwiper from "@/components/base/ImageSwiper.vue";

const imagesStore = useImagesStore();
</script>

<template>
  <landing-hero />
  <main>
    <bio-section />
    <image-swiper :images="imagesStore.imagesUnderBio" />
    <listen-section />
    <about-section />
    <live-shows-section />
  </main>
</template>

<style>
main {
  margin-bottom: 200px;
}
</style>
