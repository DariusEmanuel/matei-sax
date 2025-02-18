<template>
  <header class="header">
    <a class="header__logo" href="#app">
      <img
        class="header__logo-image"
        src="../assets/msx-logo.png"
        alt="Matei Sax Logo"
      />
    </a>
    <nav class="header__nav">
      <ul class="header__social-links">
        <li
          v-for="(link, index) in socialLinks"
          :key="index"
          class="header__social-item"
        >
          <a :href="link.url" target="_blank" class="header__social-link">
            <img :src="link.icon" :alt="link.alt" class="header__social-icon" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const socialLinks = ref([
  {
    url: "https://www.facebook.com/MateiSaxMusic",
    icon: "/src/assets/icon-facebook.png",
    alt: "Follow Matei Sax on Facebook",
  },
  {
    url: "https://www.instagram.com/matei.sax/",
    icon: "/src/assets/icon-instagram.png",
    alt: "Follow Matei Sax on Instagram",
  },
  {
    url: "https://open.spotify.com/artist/11O4kxlEb8Q2cMBePFXUGC",
    icon: "/src/assets/icon-spotify.png",
    alt: "Listen to Matei Sax on Spotify",
  },
  {
    url: "https://www.youtube.com/@mateisax",
    icon: "/src/assets/icon-youtube.png",
    alt: "Subscribe to the Matei Sax YouTube channel",
  },
]);
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 60px;
  // background-color: rgba(160, 24, 242, 0.8);
  background-color: rgba(24, 24, 24, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  // box-shadow: 0px 4px 10px rgba(167, 83, 219, 0.68);

  z-index: 100;
}

.header__logo {
  display: flex;
}

.header__logo-image {
  width: 80px;
  height: auto;
}

.header__nav {
  display: flex;
}

.header__social-links {
  display: flex;
  list-style: none;
  gap: 12px;
  margin: 0;
  padding: 0;
}

.header__social-item {
  display: flex;
}

.header__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, opacity 0.25s ease;
  opacity: 0.8;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
}

.header__social-icon {
  max-height: 24px;
  width: auto;
}
</style>
