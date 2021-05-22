<template>
  <div
    class="fixed inset-0 grid grid-flow-row auto-rows-min bg-dusty-orange md:grid-cols-2 md:grid-rows-0"
  >
    <div class="md:order-2">
      <button
        class="fixed top-0 left-0 p-[17.5px] z-10 md:py-[50px] md:px-[30px] 2xl:px-[55px]"
        @click="closeFabricExplanation"
      >
        <img class="md:w-[24px]" src="~/assets/images/cross.svg" />
      </button>

      <picture>
        <source srcset="/images/home/scarf.avif" type="image/avif" />
        <source srcset="/images/home/scarf.webp" type="image/webp" />
        <source srcset="/images/home/scarf.jpg" type="image/jpeg" />
        <img
          class="md:h-screen md:object-cover md:object-center"
          src="/images/home/scarf.jpg"
          alt=""
          width="1080"
          height="1080"
        />
      </picture>
    </div>
    <div
      class="mt-[20px] px-[17.5px] md:order-1 md:h-screen md:flex md:flex-col md:justify-center md:px-[30px] 2xl:px-[55px]"
    >
      <h2
        class="font-serif font-light text-[32px] leading-[32px] md:text-[50px] md:leading-[73px]"
      >
        Silk
      </h2>
      <p
        class="mt-[20px] font-light leading-[22px] md:mt-[30px] md:text-[24px] md:leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeFabricExplanation() {
      this.$emit("closeFabricExplanation");
    }
  }
};
</script>
