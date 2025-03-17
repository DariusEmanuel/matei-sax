<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  beforeText: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "60px",
  },
  lineHeight: {
    type: String,
    default: "55px",
  },
  fontSizeSpan: {
    type: String,
    default: "16px",
  },
  lineHeightSpan: {
    type: String,
    default: "20px",
  },
});

const cssProps = computed(() => ({
  "--before-content": `'${props.beforeText}'`,
  "--font-size": props.fontSize,
  "--line-height": props.lineHeight,
}));

const cssSpanProps = computed(() => ({
  "--span-font-size": props.fontSizeSpan,
  "--span-line-height": props.lineHeightSpan,
}));
</script>

<template>
  <section class="text-block">
    <h1 class="text-block__title" :style="cssProps">{{ title }}</h1>
    <p class="text-block__subtitle" :style="cssSpanProps">
      <slot></slot>
    </p>
  </section>
</template>

<style lang="scss">
.text-block {
  text-align: center;
  padding: 20px 10px;
  margin-top: 20px;
}

.text-block__title {
  color: rgba(255, 255, 255, 0.2);
  position: relative;
  text-transform: uppercase;
  font: normal normal bold var(--font-size) / var(--line-height) GalvjiBold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: var(--before-content);
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.text-block__subtitle {
  color: white;
  font-weight: bold;
  font: normal normal bold var(--span-font-size) / var(--span-line-height)
    GalvjiBold;
}
</style>
