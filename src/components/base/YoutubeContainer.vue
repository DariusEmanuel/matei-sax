<script setup lang="ts">
interface YoutubeProps {
  width: string;
  height: number | "auto";
  title: string;
  src: string;
}
const props = defineProps<Required<YoutubeProps>>();
</script>

<template>
  <div class="youtube-container">
    <iframe
      class="youtube-container__iframe"
      :title
      :width
      :height
      :src
      frameBorder="0"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      loading="lazy"
    ></iframe>
  </div>
</template>

<style lang="scss">
.youtube-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &__iframe {
    border-radius: 12px;
  }
}
</style>
