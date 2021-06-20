<template>
  <div>
    <cookie-alert />
    <transition
      enter-active-class="transition duration-700 transform"
      enter-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition duration-700 transform"
      leave-class="translate-y-0"
      leave-to-class="-translate-y-full"
    >
      <the-hamburger-menu v-if="this.$store.state.menuVisible" />
    </transition>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>
