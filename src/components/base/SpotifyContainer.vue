<script setup lang="ts">
interface SpotifyProps {
  width: string;
  height: number | "auto";
  title: string;
  src: string;
}
const props = defineProps<Required<SpotifyProps>>();
</script>

<template>
  <div class="spotify-container">
    <iframe
      class="spotify-container__iframe"
      :title
      :width
      :height
      :src
      frameBorder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>

<style lang="scss">
.spotify-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  &__iframe {
    border-radius: 12px;
  }
}
</style>
