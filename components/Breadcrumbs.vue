<template>
  <ul>
    <li
      class="inline font-light text-[12px] leading-[17px] text-[#A3A3A3]"
      v-for="crumb in breadcrumbs"
      :key="crumb.name"
    >
      <NuxtLink :to="crumb.link">{{ crumb.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["breadcrumbs"]
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
