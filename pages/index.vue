<template>
  <div>
    <div id="hero">
      <div class="bg-dusty-orange h-full bg-opacity-90">
        <div class="container mx-auto pt-[191px] pb-[48px] px-[17.5px]">
          <p class="font-serif text-electric-pink text-[34px] leading-[40px]">
            Colour was swapped out for sequins in Lola van Praag’s
            <span class="font-sans underline">NO UNLOCALS</span>
            graduate collection. She sent out brightly sparkling models dressed
            in tight-fitting sequin-heavy wetsuits.
          </p>
          <div class="mt-[40px] ml-[20px]">
            <img class="inline-block" src="~/assets/images/arrow-pink.svg" />
            <div
              class="inline-block ml-[29px] lowercase text-[18px] leading-[24px] text-electric-pink"
            >
              View project
            </div>
          </div>
        </div>
        <Marquee />
      </div>
    </div>
    <div class="h-[100px]"></div>
  </div>
</template>

<style scoped>
#hero {
  background-image: url("~/assets/images/hero-background.jpg");
}
</style>
