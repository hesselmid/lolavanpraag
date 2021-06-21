<template>
  <div class="pt-[86px] pb-[100px] md:pt-[165px] md:pb-[228px] ">
    <meta-tags :title="title" :description="description" />
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:mt-[15px] md:text-[90px] md:leading-[90px]"
      >
        Beyond the Lipstick
      </h1>
      <p
        class="mt-[10px] font-light leading-[22px] md:mt-[15px] md:max-w-[640px] md:text-[24px] md:leading-[30px]"
      >
        The collection “Beyond the Lipstick” was made specially for “Visions of”
        a collaboration between Duran Lantink and Amsterdam Fashion week. To
        give young designers a platform with a focus on sustainability. The
        collection was inspired by the book Mauvais Genre by Sebastien Lifshitz,
        which contains photographs of crossdressers dating back all the way to
        1860. The people in the book use clothing as an instrument of freedom,
        playing around with identity. I wanted to show this concept in my own
        collection and give it a modern twist.
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
        <img
          class="mt-[30px] col-span-2 row-span-3"
          src="/images/no-unlocals-1.jpg"
        />
        <img
          class="mt-[15px] col-span-3 row-span-4"
          src="/images/no-unlocals-2.jpg"
        />
        <div
          class="hidden col-span-2 row-span-2 lg:flex lg:justify-center lg:items-center"
        >
          <blockquote
            class="font-serif font-light text-[60px] leading-[58px] text-center"
          >
            "The collection was inspired by the book Mauvais Genre by Sebastien
            Lifshitz, which contains photographs of crossdressers dating back
            all the way to 1860."
          </blockquote>
        </div>
      </div>
    </div>

    <marquee class="hidden lg:block" />

    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <p
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-[69px] lg:ml-[231px] lg:max-w-[640px]"
      >
        To explore the concept of sustainability I collected materials all over
        the Netherlands from peoples house who had textiles, buttons, brooches
        and yarns that would otherwise just be laying around next to newly
        bought eco textiles and regenerated old clothing pieces. The collection
        was made in collaboration with multiple craftspeople. I went and
        collected crochet dollies that people had made (mostly elderly) that I
        used to create one total look. This was especially nice since it gave
        all the people who gifted my the doilies a feeling of togetherness and
        pride knowing that their work in some way would also be shown on the
        Amsterdam Fashion Week. For this collection I also collaborated with
        many other people such as seamstress, a jeansmaker and a knitting lady
        to use their knowledge and expertise.
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
        src="/images/no-unlocals-3.jpg"
        width="345.21px"
        height="344.03px"
        alt=""
      />
      <img
        class="ml-[5px] w-[252px] flex-shrink-0 lg:mt-[176px] lg:ml-[24px] lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-2': showAnimation2,
          invisible: !showAnimation2
        }"
        src="/images/no-unlocals-4.jpg"
        width="345.21px"
        height="344.03px"
        alt=""
      />
      <img
        class="ml-[5px] w-[252px] flex-shrink-0 lg:mt-[24px] lg:ml-[24px] lg:w-[345px]"
        v-observe-visibility="{ callback: isViewableNow, once: true }"
        :class="{
          'visible animation-3': showAnimation3,
          invisible: !showAnimation3
        }"
        src="/images/no-unlocals-9.jpg"
        width="345.21px"
        height="344.03px"
        alt=""
      />
    </div>
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <p
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-0 lg:ml-auto lg:mr-[231px] lg:max-w-[640px]"
      >
        During the Amsterdam Fashion Week 2020 the collection was shown in a
        performance made in collaboration with choreographer Marne van Opstal
        and performed by dancers from the Fashion composers agency.
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
          <img src="/images/no-unlocals-5.jpg" alt="" />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img src="/images/no-unlocals-6.jpg" alt="" />
        </div>
        <div class="mt-[15px] lg:mt-0">
          <img src="/images/no-unlocals-7.jpg" alt="" />
        </div>
        <div class="mt-[15px] lg:mt-[50px] lg:mr-[118px]">
          <img src="/images/no-unlocals-8.jpg" alt="" />
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
        { name: "Beyond the Lipstick", link: "/portfolio/beyond-the-lipstick" }
      ],
      title: "Beyond the Lipstick",
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
