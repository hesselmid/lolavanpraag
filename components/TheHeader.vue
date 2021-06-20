<template>
  <nav
    class="absolute inset-x-0 container mx-auto pt-[20px] px-[18px] grid grid-cols-3"
  >
    <ul class="hidden md:flex md:justify-around md:items-center">
      <li>
        <nuxt-link class="font-light text-[18px] leading-[24px]" to="/about"
          >About me</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="font-light text-[18px] leading-[24px]" to="/portfolio"
          >Portfolio</nuxt-link
        >
      </li>
    </ul>
    <div class="col-start-2">
      <nuxt-link to="/" aria-label="Logo">
        <img
          class="mx-auto w-[120px] md:w-[200px]"
          src="~/assets/images/logo-pink.svg"
          width="200px"
          height="59.74px"
          alt="Logo"
        />
      </nuxt-link>
    </div>
    <div class="flex justify-end md:hidden">
      <button @click="toggleMenu" aria-label="Open Menu">
        <img src="~assets/images/hamburger.svg" aria-hidden="true" />
      </button>
    </div>
    <ul class="hidden md:flex md:justify-around md:items-center">
      <li>
        <nuxt-link class="font-light text-[18px] leading-[24px]" to="/press"
          >Press</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="font-light text-[18px] leading-[24px]" to="/blog"
          >News</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="font-light text-[18px] leading-[24px]" to="/contact"
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
