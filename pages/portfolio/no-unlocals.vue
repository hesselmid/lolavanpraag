<template>
  <div class="pt-[86px] pb-[100px] lg:pt-[165px] lg:pb-[228px] ">
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] lg:mt-[15px] lg:text-[90px] lg:leading-[90px]"
      >
        No Unlocals
      </h1>
      <p
        class="mt-[10px] font-light leading-[22px] lg:mt-[15px] lg:max-w-[640px] lg:text-[24px] lg:leading-[30px]"
      >
        My graduate collection, NO UNLOCALS, is inspired by the 70’s and 80’s
        surf scene in California. The work of iconic surf photographers Jeff
        Divine and Hugh Holland served as a perfect departure point. Their epic
        photographs provide a vivid and colourful testimony of the evolution of
        the culture and fashion in the surf scene in that time and place
      </p>
      <div
        class="lg:mt-[50px] lg:grid lg:grid-cols-5 lg:grid-rows-5 lg:gap-x-[46px]"
      >
        <div
          class="col-span-3 row-span-1 lg:flex lg:flex-col lg:justify-center lg:mx-auto"
        >
          <h2
            class="mt-[20px] font-medium leading-[22px] lg:mt-0 lg:text-[24px] lg:leading-[30px]"
          >
            Materials used:
          </h2>
          <ul>
            <li
              class="font-light leading-[22px] lg:text-[24px] lg:leading-[30px]"
            >
              Neoprene
            </li>
            <li
              class="font-light leading-[22px] lg:text-[24px] lg:leading-[30px]"
            >
              Cotton
            </li>
          </ul>
          <h2
            class="mt-[20px] font-medium leading-[22px] lg:mt-[50px] lg:text-[24px] lg:leading-[30px]"
          >
            Find this collection at the following gallery:
          </h2>
          <a
            class="leading-[22px] underline lg:text-[24px] lg:leading-[30px]"
            href="https://www.rademakersgallery.com/"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            Rademarkers Gallery
          </a>
        </div>
        <div class="mt-[30px] col-span-2 row-span-3">
          <NuxtPicture src="/images/no-unlocals-1.jpg" />
        </div>
        <div class="mt-[15px] col-span-3 row-span-4">
          <NuxtPicture src="/images/no-unlocals-2.jpg" />
        </div>
        <div
          class="hidden col-span-2 row-span-2 lg:flex lg:justify-center lg:items-center"
        >
          <blockquote
            class="font-serif font-light text-[60px] leading-[58px] text-center"
          >
            "To kick-start this project I collected a bunch of old wetsuits"
          </blockquote>
        </div>
      </div>
    </div>

    <Marquee class="hidden lg:block" />

    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <p
        class="mt-[30px] font-light leading-[22px] lg:mt-[69px] lg:ml-[231px] lg:max-w-[640px] lg:text-[24px] lg:leading-[30px]"
      >
        To kick-start this project I collected a bunch of old wetsuits. I
        deconstructed these in order to learn about the way they are built and
        to get an idea about the patterns used by pioneering surf companies like
        O’Neill and Rip Curl.
      </p>
      <p
        class="mt-[30px] font-light leading-[22px] lg:ml-[231px] lg:max-w-[640px] lg:text-[24px] lg:leading-[30px]"
      >
        One of the most important elements in the construction of a wetsuit are
        the seams. They are stitched and taped in a very unique way to
        accommodate for the manoeuvrability required for surfing. I have tried
        to put an emphasis on the seams by exaggerating them – using them
        predominantly in decorative, rather than a purely functional, way.
      </p>
    </div>
    <div
      class="mt-[30px] pl-[17.5px] flex flex-nowrap overflow-x-auto lg:mt-0 lg:pl-[55px] lg:h-[724px] lg:items-center"
    >
      <NuxtPicture
        class="w-[252px] flex-shrink-0 lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-1': showAnimation1,
          invisible: !showAnimation1
        }"
        src="/images/no-unlocals-3.jpg"
        sizes="sm:252px md:345px lg:345px"
        width="345.21px"
        height="344.03px"
        alt=""
      />
      <NuxtPicture
        class="ml-[5px] w-[252px] flex-shrink-0 lg:mt-[176px] lg:ml-[24px] lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-2': showAnimation2,
          invisible: !showAnimation2
        }"
        src="/images/no-unlocals-4.jpg"
        sizes="sm:252px md:345px lg:345px"
        width="345.21px"
        height="344.03px"
        alt=""
      />
      <NuxtPicture
        class="ml-[5px] w-[252px] flex-shrink-0 lg:mt-[24px] lg:ml-[24px] lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-3': showAnimation3,
          invisible: !showAnimation3
        }"
        src="/images/no-unlocals-9.jpg"
        sizes="sm:252px md:345px lg:345px"
        width="345.21px"
        height="344.03px"
        alt=""
      />
    </div>
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <p
        class="mt-[30px] font-light leading-[22px] lg:mt-0 lg:ml-auto lg:mr-[231px] lg:max-w-[640px] lg:text-[24px] lg:leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <blockquote
        class="mt-[50px] font-serif font-light text-[34px] leading-[40px] text-electric-pink text-center lg:mt-[116px] lg:text-[80px] lg:leading-[70px]"
      >
        "One of the most important elements in the construction of a wetsuit are
        the seams"
      </blockquote>

      <div
        class="mt-[50px] lg:mt-[143px] lg:grid lg:grid-cols-2 lg:gap-x-[50px]"
      >
        <div class="lg:mt-[125px] lg:ml-[118px]">
          <NuxtPicture src="/images/no-unlocals-5.jpg" />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <NuxtPicture src="/images/no-unlocals-6.jpg" />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <NuxtPicture src="/images/no-unlocals-7.jpg" />
        </div>
        <div class="mt-[15px] lg:mt-[50px] lg:mr-[118px]">
          <NuxtPicture src="/images/no-unlocals-8.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "No Unlocals", link: "/portfolio/no-unlocals" }
      ],
      showAnimation1: false,
      showAnimation2: false,
      showAnimation3: false
    };
  },
  head: {
    title: "No Unlocals | lolavanpraag.com",
    meta: [
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ]
  },
  methods: {
    isViewableNow(isVisible, entry) {
      this.showAnimation1 = isVisible;
      this.showAnimation2 = isVisible;
      this.showAnimation3 = isVisible;
    }
  }
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .animation-1 {
    animation: sample-1 8s linear;
  }

  @keyframes sample-1 {
    from {
      transform: translateX(-500px) rotate(0deg);
    }
    to {
      transform: translateX(0px) rotate(360deg);
    }
  }

  .animation-2 {
    animation: sample-2 7s linear;
  }

  @keyframes sample-2 {
    from {
      transform: translateX(-500px) rotate(0deg);
    }
    to {
      transform: translateX(0px) rotate(360deg);
    }
  }

  .animation-3 {
    animation: sample-3 6s linear;
  }

  @keyframes sample-3 {
    from {
      transform: translateX(-500px) rotate(0deg);
    }
    to {
      transform: translateX(0px) rotate(360deg);
    }
  }
}
</style>
