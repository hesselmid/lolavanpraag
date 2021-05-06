<template>
  <div>
    <TheHamburgerMenu v-if="this.$store.state.menuVisible" />
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
