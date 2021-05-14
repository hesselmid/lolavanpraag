<template>
  <NuxtLink class="inline-block group" :to="link">
    <img
      :class="{
        'inline-block': black,
        hidden: pink,
        'group-hover:hidden': black,
        'group-hover:inline-block': pink
      }"
      src="~assets/images/arrow.svg"
      width="18px"
      height="14px"
      alt=""
    />
    <img
      :class="{
        'inline-block': pink,
        hidden: black,
        'group-hover:hidden': pink,
        'group-hover:inline-block': black
      }"
      src="~assets/images/arrow-pink.svg"
      width="18px"
      height="14px"
      alt=""
    />

    <div
      class="ml-[29px] inline-block leading-[22px] lowercase group-hover:underline md:text-[18px] md:leading-[24px]"
      :class="{
        'text-black': black,
        'text-electric-pink': pink,
        'group-hover:text-electric-pink': black,
        'group-hover:text-black': pink
      }"
    >
      <slot> </slot>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["black", "pink", "link"]
};
</script>
