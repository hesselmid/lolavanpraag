<template>
  <div>
    <transition
      enter-active-class="transition duration-700 transform"
      enter-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition duration-700 transform"
      leave-class="translate-y-0"
      leave-to-class="-translate-y-full"
    >
      <TheHamburgerMenu v-if="this.$store.state.menuVisible" />
    </transition>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
