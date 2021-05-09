<template>
  <div id="hero">
    <div class="bg-dusty-orange h-full bg-opacity-90">
      <div
        class="container mx-auto pt-[191px] pb-[48px] px-[17.5px] md:px-[30px] xl:pt-[266px] xl:pb-[53px] xl:px-[55px]"
      >
        <p
          class="font-serif text-electric-pink text-[34px] leading-[40px] xl:text-[84px] xl:leading-[86px]"
        >
          Colour was swapped out for sequins in Lola van Praag’s
          <span class="font-sans underline">NO UNLOCALS</span>
          graduate collection. She sent out brightly sparkling models dressed in
          tight-fitting sequin-heavy wetsuits.
        </p>
        <div class="mt-[40px] ml-[20px] xl:mt-[60px] xl:ml-[30px]">
          <img class="inline-block" src="~/assets/images/arrow-pink.svg" />
          <div
            class="inline-block ml-[29px] lowercase text-[18px] leading-[24px] text-electric-pink"
          >
            View project
          </div>
        </div>
        <div class="hidden mt-[54px] xl:block">
          <img class="mx-auto" src="~/assets/images/scroll-icon.svg" />
        </div>
      </div>
      <Marquee />
    </div>
  </div>
</template>

<style scoped>
#hero {
  background-image: url("~/assets/images/hero-background.jpg");
}
</style>
