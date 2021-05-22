<template>
  <picture>
    <source :srcset="`${src}.avif`" type="image/avif" />
    <source :srcset="`${src}.webp`" type="image/webp" />
    <source :srcset="`${src}.jpg`" type="image/jpeg" />
    <img
      :class="classes"
      :src="`${src}.jpg`"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="lazy"
    />
  </picture>
</template>

<script>
export default {
  props: ["src", "alt", "width", "height", "lazy"],
  props: {
    classes: {
      type: String
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    lazy: {
      type: String,
      default: "lazy"
    }
  }
};
</script>
