<template>
  <nav
    class="absolute inset-x-0 container mx-auto pt-[20px] px-[18px] grid grid-cols-3"
  >
    <ul class="hidden 2xl:block"></ul>
    <div class="col-start-2">
      <img class="mx-auto" src="~/assets/images/logo-pink.svg" />
    </div>
    <div class="flex justify-end">
      <button @click="toggleMenu">
        <img src="~assets/images/hamburger.svg" />
      </button>
    </div>
    <ul class="hidden 2xl:block"></ul>
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
