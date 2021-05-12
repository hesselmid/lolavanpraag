<template>
  <div class="container mx-auto px-[17.5px] md:px-[30px] 2xl:px-[55px]">
    <div class="grid grid-cols-20">
      <img
        class="mt-[23px] col-span-12"
        src="https://source.unsplash.com/random"
        width="100%"
        height="100%"
      />
      <div class="col-span-7 ml-auto col-start-14">
        <img
          src="https://source.unsplash.com/random"
          width="100%"
          height="100%"
        />
        <img
          class="mt-[14px]"
          src="https://source.unsplash.com/random"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <div class="mt-[20px] md:mt-[37px] md:ml-[109px]">
      <h2
        class="font-extralight text-[20px] leading-[28px] md:ml-[28px] md:font-thin md:text-[40px] md:leading-[80px]"
      >
        Follow me
      </h2>
      <div
        class="mt-[10px] font-serif font-light text-electric-pink text-[40px] leading-[35px] md:text-[70px] md:leading-[80px]"
      >
        @lolavanpraag
      </div>
      <a
        href="https://www.instagram.com/lolavanpraag/"
        target="_blank"
        rel="nofollow noreferrer noopener"
        class="block mt-[20px] ml-[20px] md:mt-[40px] md:ml-[30px]"
      >
        <img class="inline-block" src="~assets/images/arrow.svg" />
        <div
          class="inline-block ml-[29px] leading-[22px] lowercase md:text-[18px] md:leading-[24px]"
        >
          Follow me
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.grid-cols-20 {
  grid-template-columns: repeat(20, minmax(0, 1fr));
}

.col-start-14 {
  grid-column-start: 14;
}
</style>
