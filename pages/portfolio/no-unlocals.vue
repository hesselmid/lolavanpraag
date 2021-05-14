<template>
  <div
    class="container mx-auto pt-[86px] px-[17.5px] md:px-[30px] 2xl:px-[55px]"
  >
    <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <h1 class="mt-[20px] font-serif font-light text-[32px] leading-[32px]">
      No Unlocals
    </h1>
    <p class="mt-[10px] font-light leading-[22px]">
      My graduate collection, NO UNLOCALS, is inspired by the 70’s and 80’s surf
      scene in California. The work of iconic surf photographers Jeff Divine and
      Hugh Holland served as a perfect departure point. Their epic photographs
      provide a vivid and colourful testimony of the evolution of the culture
      and fashion in the surf scene in that time and place
    </p>
    <h2 class="mt-[20px] font-medium leading-[22px]">Materials used:</h2>
    <ul>
      <li class="font-light leading-[22px]">Neoprene</li>
      <li class="font-light leading-[22px]">Cotton</li>
    </ul>
    <h2 class="mt-[20px] font-medium leading-[22px]">
      Find this collection at the following gallery:
    </h2>
    <a
      class="leading-[22px] underline"
      href="https://www.rademakersgallery.com/"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      Rademarkers Gallery
    </a>
    <div class="mt-[30px]">
      <NuxtPicture src="/images/no-unlocals-1.jpg" />
    </div>
    <div class="mt-[15px]">
      <NuxtPicture src="/images/no-unlocals-2.jpg" />
    </div>
    <p class="mt-[30px] font-light leading-[22px]">
      To kick-start this project I collected a bunch of old wetsuits. I
      deconstructed these in order to learn about the way they are built and to
      get an idea about the patterns used by pioneering surf companies like
      O’Neill and Rip Curl.
    </p>
    <p class="mt-[30px] font-light leading-[22px]">
      One of the most important elements in the construction of a wetsuit are
      the seams. They are stitched and taped in a very unique way to accommodate
      for the manoeuvrability required for surfing. I have tried to put an
      emphasis on the seams by exaggerating them – using them predominantly in
      decorative, rather than a purely functional, way.
    </p>
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
