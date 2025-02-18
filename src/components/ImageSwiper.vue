<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
};

const onSlideChange = (e) => {};
</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    centered-slides="true"
    :pagination="{ hideOnClick: true }"
    :breakpoints="{ 768: { slidesPerView: 3 } }"
    autoplay-delay="2500"
    autoplay-disable-on-interaction="false"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Slide Image" class="carousel__image" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-container::part(bullet-active) {
  background-color: rgb(0, 0, 0);
}

swiper-container::part(bullet) {
  background-color: rgb(56, 54, 54, 0.7);
}

swiper-slide {
  width: 400px;
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__image {
  display: block;
  width: 100%;
  object-fit: cover;
}
</style>
