<template>
  <nav
    class="absolute inset-x-0 container mx-auto pt-[20px] px-[18px] grid grid-cols-3"
  >
    <ul class="hidden md:flex md:justify-around md:items-center">
      <li>
        <NuxtLink class="font-light text-[18px] leading-[24px]" to="/about"
          >About me</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="font-light text-[18px] leading-[24px]" to="/portfolio"
          >Portfolio</NuxtLink
        >
      </li>
    </ul>
    <div class="col-start-2">
      <img class="mx-auto md:w-[200px]" src="~/assets/images/logo-pink.svg" />
    </div>
    <div class="flex justify-end md:hidden">
      <button @click="toggleMenu">
        <img src="~assets/images/hamburger.svg" />
      </button>
    </div>
    <ul class="hidden md:flex md:justify-around md:items-center">
      <li>
        <NuxtLink class="font-light text-[18px] leading-[24px]" to="/press"
          >Press</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="font-light text-[18px] leading-[24px]" to="/news"
          >News</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="font-light text-[18px] leading-[24px]" to="/contact"
          >Contact</NuxtLink
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
