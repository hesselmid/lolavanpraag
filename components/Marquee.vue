<template>
  <div class="bg-electric-pink w-full overflow-hidden">
    <div
      class="text-[35px] leading-[49px] md:text-[75px] md:leading-[104px] whitespace-nowrap loop"
    >
      <span>
        <span class="font-thin">Currently working on</span>
        <span class="font-serif">Object Rotterdam</span> /
        <span class="font-thin">Currently working on</span> Object Rotterdam /
        Currently working on Object Rotterdam /
      </span>
      <span>
        <span class="font-thin">Currently working on</span>
        <span class="font-serif">Object Rotterdam</span> /
        <span class="font-thin">Currently working on</span> Object Rotterdam /
        Currently working on Object Rotterdam /
      </span>
    </div>
  </div>
</template>

<style scoped>
.loop {
  animation: loop 20s linear infinite;
  animation-delay: 0s;
}

@keyframes loop {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-176%, 0);
  }
}
</style>
