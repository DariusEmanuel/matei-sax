import { defineStore } from "pinia";
import { ref } from "vue";

export interface Image {
  link?: string;
  url: string;
  alt: string;
}

export const useImagesStore = defineStore("images", () => {
  const socialLinks = ref<Image[]>([
    {
      link: "https://www.facebook.com/MateiSaxMusic",
      url: new URL(`/src/assets/icon-facebook.png`, import.meta.url).href,
      alt: "Follow Matei Sax on Facebook",
    },
    {
      link: "https://www.instagram.com/matei.sax/",
      url: new URL("/src/assets/icon-instagram.png", import.meta.url).href,
      alt: "Follow Matei Sax on Instagram",
    },
    {
      link: "https://open.spotify.com/artist/11O4kxlEb8Q2cMBePFXUGC",
      url: new URL("/src/assets/icon-spotify.png", import.meta.url).href,
      alt: "Listen to Matei Sax on Spotify",
    },
    {
      link: "https://www.youtube.com/@mateisax",
      url: new URL("/src/assets/icon-youtube.png", import.meta.url).href,
      alt: "Subscribe to the Matei Sax YouTube channel",
    },
  ]);

  const imagesUnderBio = ref(
    Array.from({ length: 10 }, (_, i) => ({
      url: new URL(`/src/assets/underBio/image${i + 1}.jpg`, import.meta.url)
        .href,
      alt: "Image Carousel",
    }))
  );

  return {
    socialLinks,
    imagesUnderBio,
  };
});
