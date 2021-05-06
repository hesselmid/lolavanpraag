<template>
  <nav class="bg-apple-green fixed inset-0 z-50">
    <div class="container mx-auto pt-[20px] px-[18px] grid grid-cols-3">
      <div class="col-start-2">
        <img class="mx-auto" src="~/assets/images/logo-pink.svg" />
      </div>
      <div class="flex justify-end">
        <button @click="toggleMenu">
          <img src="~assets/images/cross.svg" />
        </button>
      </div>
    </div>
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
