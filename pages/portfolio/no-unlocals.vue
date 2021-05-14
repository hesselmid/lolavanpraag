<template>
  <div
    class="container mx-auto pt-[86px] px-[17.5px] md:px-[30px] 2xl:px-[55px]"
  >
    <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <h1 class="mt-[20px] font-serif font-light text-[32px] leading-[32px]">
      No Unlocals
    </h1>
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
