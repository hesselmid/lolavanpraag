<template>
  <div class="pt-[86px] pb-[100px] 2xl:pt-[165px] 2xl:pb-[228px] ">
    <div class="container mx-auto px-[17.5px] md:px-[30px] 2xl:px-[55px]">
      <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] 2xl:mt-[15px] 2xl:text-[90px] 2xl:leading-[90px]"
      >
        No Unlocals
      </h1>
      <p
        class="mt-[10px] font-light leading-[22px] 2xl:mt-[15px] 2xl:max-w-[640px] 2xl:text-[24px] 2xl:leading-[30px]"
      >
        My graduate collection, NO UNLOCALS, is inspired by the 70’s and 80’s
        surf scene in California. The work of iconic surf photographers Jeff
        Divine and Hugh Holland served as a perfect departure point. Their epic
        photographs provide a vivid and colourful testimony of the evolution of
        the culture and fashion in the surf scene in that time and place
      </p>
      <div
        class="2xl:mt-[50px] 2xl:grid 2xl:grid-cols-5 2xl:grid-rows-5 2xl:gap-x-[46px]"
      >
        <div
          class="col-span-3 row-span-1 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:mx-auto"
        >
          <h2
            class="mt-[20px] font-medium leading-[22px] 2xl:mt-0 2xl:text-[24px] 2xl:leading-[30px]"
          >
            Materials used:
          </h2>
          <ul>
            <li
              class="font-light leading-[22px] 2xl:text-[24px] 2xl:leading-[30px]"
            >
              Neoprene
            </li>
            <li
              class="font-light leading-[22px] 2xl:text-[24px] 2xl:leading-[30px]"
            >
              Cotton
            </li>
          </ul>
          <h2
            class="mt-[20px] font-medium leading-[22px] 2xl:mt-[50px] 2xl:text-[24px] 2xl:leading-[30px]"
          >
            Find this collection at the following gallery:
          </h2>
          <a
            class="leading-[22px] underline 2xl:text-[24px] 2xl:leading-[30px]"
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
          class="hidden col-span-2 row-span-2 2xl:flex 2xl:justify-center 2xl:items-center"
        >
          <blockquote
            class="font-serif font-light text-[60px] leading-[58px] text-center"
          >
            "To kick-start this project I collected a bunch of old wetsuits"
          </blockquote>
        </div>
      </div>
    </div>
    <Marquee class="hidden 2xl:block" />
    <div class="container mx-auto px-[17.5px] md:px-[30px] 2xl:px-[55px]">
      <p class="mt-[30px] font-light leading-[22px]">
        To kick-start this project I collected a bunch of old wetsuits. I
        deconstructed these in order to learn about the way they are built and
        to get an idea about the patterns used by pioneering surf companies like
        O’Neill and Rip Curl.
      </p>
      <p class="mt-[30px] font-light leading-[22px]">
        One of the most important elements in the construction of a wetsuit are
        the seams. They are stitched and taped in a very unique way to
        accommodate for the manoeuvrability required for surfing. I have tried
        to put an emphasis on the seams by exaggerating them – using them
        predominantly in decorative, rather than a purely functional, way.
      </p>
      <div class="mt-[30px] flex">
        <NuxtPicture src="/images/no-unlocals-3.jpg" />
        <NuxtPicture src="/images/no-unlocals-4.jpg" />
      </div>
      <p class="mt-[30px] font-light leading-[22px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <blockquote
        class="mt-[50px] font-serif font-light text-[34px] leading-[40px] text-electric-pink text-center"
      >
        "One of the most important elements in the construction of a wetsuit are
        the seams"
      </blockquote>
      <div class="mt-[50px]">
        <div>
          <NuxtPicture src="/images/no-unlocals-5.jpg" />
        </div>
        <div class="mt-[15px]">
          <NuxtPicture src="/images/no-unlocals-6.jpg" />
        </div>
        <div class="mt-[15px]">
          <NuxtPicture src="/images/no-unlocals-7.jpg" />
        </div>
        <div class="mt-[15px]">
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
      ]
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
  }
};
</script>
