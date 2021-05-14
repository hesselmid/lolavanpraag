<template>
  <div>
    <div id="hero">
      <div class="h-full bg-dusty-orange bg-opacity-90">
        <div
          class="container mx-auto pt-[191px] pb-[48px] px-[17.5px] md:pt-[266px] md:pb-[53px] md:px-[30px] xl:px-[55px]"
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
            <img
              class="inline-block"
              src="~/assets/images/arrow-pink.svg"
              width="18px"
              height="14px"
              alt="View Project"
            />
            <div
              class="inline-block ml-[29px] lowercase text-[18px] leading-[24px] text-electric-pink"
            >
              View project
            </div>
          </div>
          <div class="hidden mt-[54px] xl:block">
            <img
              class="mx-auto"
              src="~/assets/images/scroll-icon.svg"
              width="30px"
              height="50px"
              alt="Scroll icon"
            />
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
        <BaseLink
          class="mt-[20px] ml-[20px] group md:mt-[60px] md:ml-[30px]"
          pink="true"
          link="/about"
          >About me</BaseLink
        >
      </div>
      <div class="relative pt-[35px]">
        <div class="w-[270px] md:w-[460px]">
          <NuxtPicture
            src="/images/lola-van-praag.jpg"
            sizes="sm:270px md:460px"
            width="460"
            height="595"
            alt="Lola van Praag"
          />
        </div>
        <div
          class="absolute top-[83px] left-[229px] w-[80px] h-[80px] md:top-[72px] md:left-[400px] md:w-[190px] md:h-[190px]"
          @click="toggleFabricExplanation"
        >
          <FabricSample />
        </div>
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
              class="hidden xl:group-hover:block absolute top-[40px] left-0"
              src="~assets/images/project-left.jpg"
            />
            <img
              class="hidden xl:group-hover:block absolute top-[278px] right-0"
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
              class="hidden xl:group-hover:block absolute top-[40px] left-0"
              src="~assets/images/project-left.jpg"
            />
            <img
              class="hidden xl:group-hover:block absolute top-[278px] right-0"
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
              class="hidden xl:group-hover:block absolute top-[40px] left-0"
              src="~assets/images/project-left.jpg"
            />
            <img
              class="hidden xl:group-hover:block absolute top-[278px] right-0"
              src="~assets/images/project-right.jpg"
            />
          </li>
        </ul>
        <NuxtLink
          class="mt-[30px] group flex justify-center 2xl:mt-[107px]"
          to="/portfolio"
        >
          <div>
            <img
              class="inline-block group-hover:hidden"
              src="~assets/images/arrow.svg"
              width="18px"
              height="14px"
              alt=""
            />
            <img
              class="hidden group-hover:inline-block"
              src="~assets/images/arrow-pink.svg"
              width="18px"
              height="14px"
              alt=""
            />

            <div
              class="ml-[29px] inline-block leading-[22px] lowercase group-hover:text-electric-pink group-hover:underline lg:text-[18px] lg:leading-[24px]"
            >
              More projects
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="relative hidden xl:block">
      <img
        class="absolute top-[-350px] left-0 lola-face"
        src="~assets/images/lola-face.svg"
        @click="toggleDidYouKnow"
      />
    </div>

    <div
      class="fixed inset-0 bg-dusty-orange bg-opacity-90"
      v-if="didYouKnowIsVisible"
    >
      <div class="mt-[23px] grid grid-cols-3">
        <button class="pt-[28px] pl-[55px]" @click="toggleDidYouKnow">
          <img src="~/assets/images/cross.svg" width="24px" height="24px" />
        </button>

        <h2
          class="font-light text-apple-green text-[58px] leading-[79px] uppercase"
        >
          Did you know
        </h2>
      </div>

      <div class="grid grid-cols-2 grid-rows-5 gap-x-[50px] px-[55px]">
        <div class="col-start-2 row-start-1">
          <img
            class="ml-auto mr-[122px] rotate"
            src="~assets/images/i-want-you-to-get-to-know-me.png"
          />
        </div>
        <div
          class="col-start-1 row-start-2 font-serif font-light text-[64px] leading-[62px] text-apple-green"
        >
          I eat glitter for breakfast
        </div>
        <div
          class="col-start-2 row-start-3 font-serif font-light text-[64px] leading-[62px] text-apple-green"
        >
          I studied in 3 different countries
        </div>
        <div
          class="col-start-1 row-start-4 font-serif font-light text-[64px] leading-[62px] text-apple-green"
        >
          Jett Rebel wore my clothes at his concerts
        </div>
        <div
          class="col-start-2 row-start-5 font-serif font-light text-[64px] leading-[62px] text-apple-green"
        >
          My favourite color is electric pink
        </div>
      </div>
    </div>

    <FollowMe class="my-[100px] 2xl:mt-[194px] 2xl:mb-[110px]" />

    <FabricExplanation
      v-if="fabricExplanationIsVisible"
      @closeFabricExplanation="toggleFabricExplanation"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      didYouKnowIsVisible: false,
      fabricExplanationIsVisible: false
    };
  },
  head: {
    title: "Lola van Praag - Menswear, Textile Design | lolavanpraag.com",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Lola van Praag is a Menswear Fashion Designer and Textile Artist based in the Netherlands."
      }
    ]
  },
  methods: {
    toggleDidYouKnow() {
      this.didYouKnowIsVisible = !this.didYouKnowIsVisible;
    },
    toggleFabricExplanation() {
      this.fabricExplanationIsVisible = !this.fabricExplanationIsVisible;
    }
  }
};
</script>

<style scoped>
#hero {
  background-image: url("~/assets/images/hero-background.jpg");
}

.lola-face {
  animation-duration: 3s;
  animation-name: slidein;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left: -302px;
  }

  to {
    margin-left: 0;
  }
}

.rotate {
  animation: rotation 10s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
