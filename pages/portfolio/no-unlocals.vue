<template>
  <div class="pt-[86px] pb-[100px] md:pt-[165px] md:pb-[228px] ">
    <meta-tags :title="title" :description="description" />
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:mt-[15px] md:text-[90px] md:leading-[90px]"
      >
        No Unlocals
      </h1>
      <p
        class="mt-[10px] font-light leading-[22px] md:mt-[15px] md:max-w-[640px] md:text-[24px] md:leading-[30px]"
      >
        My graduate collection, NO UNLOCALS, is inspired by the 70’s and 80’s
        surf scene in California. The work of iconic surf photographers Jeff
        Divine and Hugh Holland served as a perfect departure point. Their epic
        photographs provide a vivid and colourful testimony of the evolution of
        the culture and fashion in the surf scene in that time and place.
      </p>
      <p
        class="mt-[10px] font-light leading-[22px] md:mt-[15px] md:max-w-[640px] md:text-[24px] md:leading-[30px]"
      >
        To kick-start this project I collected a bunch of old wetsuits. I
        deconstructed these in order to learn about the way they are built and
        to get an idea about the patterns used by pioneering surf companies like
        O’Neill and Rip Curl.
      </p>
      <div
        class="lg:mt-[50px] lg:grid lg:grid-cols-5 lg:grid-rows-5 lg:gap-x-[46px]"
      >
        <div
          class="col-span-3 row-span-1 lg:flex lg:flex-col lg:justify-center lg:mx-auto"
        >
          <h2
            class="mt-[20px] font-medium leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-0"
          >
            Materials used:
          </h2>
          <ul>
            <li
              class="font-light leading-[22px] md:text-[24px] md:leading-[30px]"
            >
              Hand-dyed cotton
            </li>
            <li
              class="font-light leading-[22px] md:text-[24px] md:leading-[30px]"
            >
              Lamé fabric
            </li>
            <li
              class="font-light leading-[22px] md:text-[24px] md:leading-[30px]"
            >
              Silk velvet
            </li>
            <li
              class="font-light leading-[22px] md:text-[24px] md:leading-[30px]"
            >
              Overstock fabrics
            </li>
            <li
              class="font-light leading-[22px] md:text-[24px] md:leading-[30px]"
            >
              Adhesive tape
            </li>
          </ul>
        </div>
        <div class="mt-[30px] col-span-2 row-span-3">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-2.jpg"
            alt="No Unlocals look #2"
            width="640"
            height="960"
          />
        </div>
        <div class="mt-[15px] col-span-3 row-span-4">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-1.jpg"
            alt="No Unlocals look #1"
            width="640"
            height="960"
          />
        </div>
        <div
          class="hidden col-span-2 row-span-2 lg:flex lg:justify-center lg:items-center"
        >
          <blockquote
            class="font-serif font-light text-[60px] leading-[58px] text-center"
          >
            “To kick-start this project I collected a bunch of old wetsuits.”
          </blockquote>
        </div>
      </div>
    </div>

    <marquee class="hidden lg:block" />

    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <p
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-[69px] lg:ml-[231px] lg:max-w-[640px]"
      >
        One of the most important elements in the construction of a wetsuit are
        the seams. They are stitched and taped in a very unique way to
        accommodate for the manoeuvrability required for surfing. I have tried
        to put an emphasis on the seams by exaggerating them – using them
        predominantly in decorative, rather than a purely functional, way.
      </p>
      <p
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-[69px] lg:ml-[231px] lg:max-w-[640px]"
      >
        Another iconic piece in the surfer’s wardrobe is of course the Hawaiian
        shirt. I visited the Royal Botanic Gardens, Kew to do visual research
        and take photographs of the exotic flowers and plants they exhibit.
        Based on my photographs I developed hand-drawn prints, which I printed
        onto the fabric of my garments by the means of screen printing.
      </p>
    </div>
    <div
      class="mt-[30px] pl-[17.5px] flex flex-nowrap overflow-x-auto lg:mt-0 lg:pl-[55px] lg:h-[724px] lg:items-center"
    >
      <img
        class="w-[252px] flex-shrink-0 lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-1': showAnimation1,
          invisible: !showAnimation1
        }"
        src="/images/no-unlocals/no-unlocals-rollin-1.jpg"
        alt="Floral Lines AFW look #1"
        width="345"
        height="517"
        loading="lazy"
      />

      <img
        class="ml-[5px] w-[252px] flex-shrink-0 lg:mt-[176px] lg:ml-[24px] lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-2': showAnimation2,
          invisible: !showAnimation2
        }"
        src="/images/no-unlocals/no-unlocals-rollin-2.jpg"
        alt="Floral Lines AFW look #2"
        width="345"
        height="517"
        loading="lazy"
      />

      <img
        class="ml-[5px] w-[252px] flex-shrink-0 lg:mt-[24px] lg:ml-[24px] lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-3': showAnimation3,
          invisible: !showAnimation3
        }"
        src="/images/no-unlocals/no-unlocals-rollin-3.jpg"
        alt="Floral Lines AFW look #3"
        width="345"
        height="517"
        loading="lazy"
      />
    </div>
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <blockquote
        class="mt-[50px] font-serif font-light text-[34px] leading-[40px] text-electric-pink text-center lg:mt-[116px] lg:text-[80px] lg:leading-[70px]"
      >
        “Based on my photographs I developed hand-drawn prints, which I printed
        onto the fabric of my garments by the means of screen printing.”
      </blockquote>

      <div
        class="mt-[50px] lg:mt-[143px] lg:grid lg:grid-cols-2 lg:gap-x-[50px]"
      >
        <div class="lg:mt-[125px] lg:ml-[118px]">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-3.jpg"
            alt="No Unlocals look #3"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-4.jpg"
            alt="No Unlocals look #4"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-5.jpg"
            alt="No Unlocals look #5"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-[50px] lg:mr-[118px]">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-6.jpg"
            alt="No Unlocals look #6"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>

        <div class="mt-[15px] lg:mt-[125px] lg:ml-[118px]">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-7.jpg"
            alt="No Unlocals look #7"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-8.png"
            alt="No Unlocals look #8"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-9.png"
            alt="No Unlocals look #9"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-[50px] lg:mr-[118px]">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-10.jpg"
            alt="No Unlocals look #10"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>

        <div class="mt-[15px] lg:mt-[125px] lg:ml-[118px]">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-11.png"
            alt="No Unlocals look #7"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-12.png"
            alt="No Unlocals look #8"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-13.png"
            alt="No Unlocals look #9"
            width="640"
            height="960"
            loading="lazy"
          />
        </div>
        <div class="mt-[15px] lg:mt-[50px] lg:mr-[118px]">
          <img
            class="w-full"
            src="/images/no-unlocals/no-unlocals-14.png"
            alt="No Unlocals look #10"
            width="640"
            height="960"
            loading="lazy"
          />
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
      title: "No Unlocals",
      description: "",
      showAnimation1: false,
      showAnimation2: false,
      showAnimation3: false
    };
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
