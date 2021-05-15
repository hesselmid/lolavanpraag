<template>
  <div class="pt-[86px] pb-[100px] md:pt-[165px] md:pb-[228px] ">
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:mt-[15px] md:text-[90px] md:leading-[90px]"
      >
        It's Not a Flower
      </h1>
      <p
        class="mt-[10px] font-light leading-[22px] md:mt-[15px] md:max-w-[640px] md:text-[24px] md:leading-[30px]"
      >
        Flowers have played a predominantly decorative rol in the world of
        textile. Think of a floral dress or your grandmas curtains. In other
        fields of art the flower has been used metaphorically to signify
        different meaning. From the renaissance, where flowers signified the
        female genitalia to the photographs of Robert Mapplethorpe, who
        photographs flowers the same way he photographed his male nudes.
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
              Neoprene
            </li>
            <li
              class="font-light leading-[22px] md:text-[24px] md:leading-[30px]"
            >
              Cotton
            </li>
          </ul>
          <h2
            class="mt-[20px] font-medium leading-[22px] md:text-[24px] md:leading-[30px] xl:mt-[50px]"
          >
            Find this collection at the following gallery:
          </h2>
          <a
            class="leading-[22px] underline md:text-[24px] md:leading-[30px]"
            href="https://www.rademakersgallery.com/"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            Rademarkers Gallery
          </a>
        </div>
        <div class="mt-[30px] col-span-2 row-span-3">
          <NuxtPicture src="/images/flower-1.jpg" />
        </div>
        <div class="mt-[15px] col-span-3 row-span-4">
          <NuxtPicture src="/images/flower-2.jpg" />
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
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-[69px] lg:ml-[231px] lg:max-w-[640px]"
      >
        My MA textile collection aims to explore ways in which textile can be
        used as a medium for expressing narrative and identity. By contrasting
        contemporary images of naked female bodies with classical paintings, I
        try to give a unique perspective to the contemporary discussions about
        female sexuality and its portrayal in modern media.
      </p>
      <p
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:ml-[231px] lg:max-w-[640px]"
      >
        I choose to use two textile techniques: double bed circle jacquard
        knitting and heat transfer print. The combination of these two
        techniques allowed me to play with the fore- and background of the
        textile and let them overlap. The resulting three dimensional structure
        exemplifies the printed image by focussing the attention not only on the
        print, but on the varying surface of the textiles.
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
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-0 lg:ml-auto lg:mr-[231px] lg:max-w-[640px]"
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
          <NuxtPicture src="/images/flower-3.jpg" />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <NuxtPicture src="/images/flower-4.jpg" />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <NuxtPicture src="/images/flower-5.jpg" />
        </div>
        <div class="mt-[15px] lg:mt-[50px] lg:mr-[118px]">
          <NuxtPicture src="/images/flower-6.jpg" />
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
        { name: "It's Not a Flower", link: "/portfolio/its-not-a-flower" }
      ],
      showAnimation1: false,
      showAnimation2: false,
      showAnimation3: false
    };
  },
  head: {
    title: "It's Not a Flower | lolavanpraag.com",
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
