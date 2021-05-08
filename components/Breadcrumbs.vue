<template>
  <ul>
    <li
      class="inline font-light text-[12px] leading-[17px] 2xl:text-[14px] 2xl:leading-[19px]"
      :style="{ color: color }"
      v-for="crumb in breadcrumbs"
      :key="crumb.name"
    >
      <NuxtLink :to="crumb.link">{{ crumb.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["breadcrumbs", "color"]
};
</script>

<style scoped>
ul li + li:before {
  padding-left: 2px;
  color: black;
  content: "/\00a0";
}

.nuxt-link-exact-active {
  color: black;
}
</style>
