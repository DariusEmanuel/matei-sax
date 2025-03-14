<script setup lang="ts">
import { computed } from "vue";

import LandingHero from "@/components/LandingHero.vue";
import BioSection from "@/components/sections/BioSection.vue";
import ListenSection from "@/components/sections/ListenSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";

import ImageSwiper from "@/components/base/ImageSwiper.vue";
import { useImagesStore } from "@/imagesStore";

const imagesStore = useImagesStore();
</script>

<template>
  <landing-hero />
  <main>
    <bio-section />
    <image-swiper :images="imagesStore.imagesUnderBio" />
    <listen-section />
    <about-section />
  </main>
</template>

<style>
main {
  margin-bottom: 200px;
}
</style>
