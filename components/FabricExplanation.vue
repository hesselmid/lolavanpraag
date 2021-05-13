<template>
  <div class="fixed inset-0 grid grid-flow-row auto-rows-min bg-dusty-orange">
    <div class="relative">
      <button
        class="absolute top-[17.5px] left-[17.5px] z-10 w-[15px]"
        @click="closeFabricExplanation"
      >
        <img src="~/assets/images/cross.svg" width="24px" height="24px" />
      </button>
      <img src="~/assets/images/silk.jpg" />
    </div>
    <div class="mt-[20px] px-[17.5px]">
      <h2 class="font-serif font-light text-[32px] leading-[32px]">Silk</h2>
      <p class="mt-[20px] font-light leading-[22px]">
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
