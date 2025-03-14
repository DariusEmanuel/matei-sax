<script setup>
import HeadlineForSection from "@/components/base/HeadlineForSection.vue";
</script>

<template>
  <div class="about-section">
    <headline-for-section
      class="about-section__headline"
      title="about"
      beforeText="Matei Sax"
      font-size="82px"
      line-height="96px"
    />
    <div class="about-section__text-content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nihil
      vitae, deleniti quas debitis maxime sed mollitia voluptatibus unde ratione
      doloremque autem animi explicabo iusto molestiae at! Qui praesentium
      itaque distinctio dolorem sit ex ipsam ut quisquam minus eveniet dolore
      eum, explicabo fugit nisi provident iure culpa velit laudantium animi?
    </div>
  </div>
</template>

<style lang="scss">
.about-section {
  margin: 0 20px;
  &__headline {
  }

  &__text-content {
  }
}
</style>
