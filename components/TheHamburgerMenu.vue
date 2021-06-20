<template>
  <nav class="fixed inset-0 z-50 bg-electric-pink">
    <div class="container mx-auto pt-[20px] px-[18px] grid grid-cols-3">
      <div class="col-start-2" @click="toggleMenu">
        <nuxt-link to="/">
          <img class="mx-auto" src="~/assets/images/logo-green.svg" />
        </nuxt-link>
      </div>
      <div class="flex justify-end">
        <button @click="toggleMenu" aria-label="Close Menu">
          <img src="~assets/images/cross.svg" aria-hidden="true" />
        </button>
      </div>
    </div>
    <ul
      class="absolute bottom-[60px] inset-x-0 px-[19px] h-[380px] flex flex-col justify-between"
    >
      <li @click="toggleMenu">
        <nuxt-link
          class="font-serif font-light text-apple-green text-[60px] leading-[40px]"
          to="/about"
          >About me</nuxt-link
        >
      </li>
      <li @click="toggleMenu">
        <nuxt-link
          class="font-serif font-light text-apple-green text-[60px] leading-[40px]"
          to="/portfolio"
          >Portfolio</nuxt-link
        >
      </li>
      <li @click="toggleMenu">
        <nuxt-link
          class="font-serif font-light text-apple-green text-[60px] leading-[40px]"
          to="/press"
          >Press</nuxt-link
        >
      </li>
      <li @click="toggleMenu">
        <nuxt-link
          class="font-serif font-light text-apple-green text-[60px] leading-[40px]"
          to="/blog"
          >News</nuxt-link
        >
      </li>
      <li @click="toggleMenu">
        <nuxt-link
          class="font-serif font-light text-apple-green text-[60px] leading-[40px]"
          to="/contact"
          >Contact</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    }
  }
};
</script>
