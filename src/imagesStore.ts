import { defineStore } from "pinia";
import { ref } from "vue";

export interface Image {
  link?: string;
  text?: string;
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

  const imagesUnderBio = ref<Image[]>(
    Array.from({ length: 10 }, (_, i) => ({
      url: new URL(`/src/assets/underBio/image${i + 1}.jpg`, import.meta.url)
        .href,
      alt: "Image Carousel",
    }))
  );

  const collaborations = ref<Image[]>([
    {
      url: new URL(`/src/assets/collabs/anda-adam.jpeg`, import.meta.url).href,
      alt: "Anda Adam Matei Sax",
      text: "Anda Adam",
    },
    {
      url: new URL(`/src/assets/collabs/nazalio.jpeg`, import.meta.url).href,
      alt: "Nazalio Fortes Matei Sax",
      text: "Nazalio Fortes",
    },
    {
      url: new URL(`/src/assets/collabs/batique.jpeg`, import.meta.url).href,
      alt: "Batique Matei Sax",
      text: "Batique",
    },
    {
      url: new URL(`/src/assets/collabs/dos-santos.jpeg`, import.meta.url).href,
      alt: "Banto dos Santos Matei Sax",
      text: "Banto dos Santos",
    },
    {
      url: new URL(
        `/src/assets/collabs/euphoria-music-hall.jpeg`,
        import.meta.url
      ).href,
      alt: "Euphoria Music Hall Matei Sax | Euphoria Music Hall Sax Performance",
      text: "Euphoria Music Hall",
    },
    {
      url: new URL(`/src/assets/collabs/hillhouse.jpeg`, import.meta.url).href,
      alt: "Hillhouse Matei Sax | HillHouse Sax Performance",
      text: "Hillhouse",
    },
    {
      url: new URL(
        `/src/assets/collabs/las-cuevas-de-los-rajas.jpeg`,
        import.meta.url
      ).href,
      alt: "Lass Cuevas de Los Rajas Icon Sax Event",
      text: "Las Cuevas de Los Rajas",
    },
    {
      url: new URL(
        `/src/assets/collabs/after-eight-coktail-club.jpeg`,
        import.meta.url
      ).href,
      alt: "Events By Chios Sax Performance | Matei Sax",
      text: "After Eight",
    },
  ]);

  return {
    socialLinks,
    imagesUnderBio,
    collaborations,
  };
});
