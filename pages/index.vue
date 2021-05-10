<template>
  <div>
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
            graduate collection. She sent out brightly sparkling models dressed
            in tight-fitting sequin-heavy wetsuits.
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

    <div
      class="container mx-auto mt-[49px] px-[17.5px] md:px-[30px] xl:mt-[148px] 2xl:px-[55px] xl:grid xl:grid-cols-2 xl:gap-x-[115px]"
    >
      <div>
        <h1
          class="ml-[20px] font-serif font-light text-[32px] leading-[32px] md:ml-[30px] md:text-[90px] md:leading-[90px]"
        >
          Lola<br />
          van Praag
        </h1>
        <p
          class="mt-[20px] font-light leading-[22px] md:mt-[15px] md:text-[24px] md:leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div class="mt-[20px] ml-[20px] md:mt-[60px] md:ml-[30px]">
          <img class="inline-block" src="~/assets/images/arrow-pink.svg" />
          <div
            class="inline-block ml-[29px] lowercase text-electric-pink leading-[22px] md:text-[18px] md:leading-[24px]"
          >
            About me
          </div>
        </div>
      </div>
      <div>
        <img
          class="pt-[35px] md:w-[460px]"
          src="~/assets/images/lola-van-praag-portrait.jpg"
        />
      </div>
    </div>

    <div class="mt-[85px] xl:mt-[136px] xl:relative xl:mb-[294px]">
      <div class="container mx-auto px-[17.5px] xl:pt-[164px]">
        <h2
          class="font-extralight text-[20px] leading-[28px] text-center lg:text-[40px] lg:leading-[80px]"
        >
          Latest projects
        </h2>
        <ul class="mt-[30px] flex flex-col items-center 2xl:mt-[75px]">
          <li class="group">
            <NuxtLink
              class="font-serif font-light uppercase text-[40px] leading-[35px] hover:font-sans hover:text-electric-pink hover:underline hover:italic lg:text-[90px] lg:leading-[75px]"
              to=""
              >No Unlocals</NuxtLink
            >
            <img
              class="hidden group-hover:xl:block absolute top-[40px] left-0"
              src="~assets/images/project-left.jpg"
            />
            <img
              class="hidden group-hover:xl:block absolute top-[278px] right-0"
              src="~assets/images/project-right.jpg"
            />
          </li>
          <li class="group mt-[35px] 2xl:mt-[75px]">
            <NuxtLink
              class="font-serif font-light uppercase text-[40px] leading-[35px] hover:font-sans hover:text-electric-pink hover:underline hover:italic lg:text-[90px] lg:leading-[75px]"
              to=""
              >It's Not a Flower</NuxtLink
            >
            <img
              class="hidden group-hover:xl:block absolute top-[40px] left-0"
              src="~assets/images/project-left.jpg"
            />
            <img
              class="hidden group-hover:xl:block absolute top-[278px] right-0"
              src="~assets/images/project-right.jpg"
            />
          </li>
          <li class="group mt-[35px] 2xl:mt-[75px]">
            <NuxtLink
              class="font-serif font-light uppercase text-[40px] leading-[35px] hover:font-sans hover:text-electric-pink hover:underline hover:italic lg:text-[90px] lg:leading-[75px]"
              to=""
              >Flower Lines</NuxtLink
            >
            <img
              class="hidden group-hover:xl:block absolute top-[40px] left-0"
              src="~assets/images/project-left.jpg"
            />
            <img
              class="hidden group-hover:xl:block absolute top-[278px] right-0"
              src="~assets/images/project-right.jpg"
            />
          </li>
        </ul>
        <div class="mt-[30px] flex justify-center 2xl:mt-[107px]">
          <div>
            <img class="inline-block" src="~/assets/images/arrow.svg" />
            <div
              class="ml-[29px] inline-block leading-[22px] lowercase lg:text-[18px] lg:leading-[24px]"
            >
              More projects
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#hero {
  background-image: url("~/assets/images/hero-background.jpg");
}
</style>
