<template>
  <div
    class="hidden bg-electric-pink sticky bottom-0:w-full overflow-hidden 2xl:block"
  >
    <div class="text-[75px] leading-[104px] whitespace-nowrap loop">
      <span>
        <span class="font-thin">Currently working on</span>
        <span class="font-serif">DDW</span> /
        <span class="font-thin">Currently working on</span> DDW / Currently
        working on DDW /
      </span>
      <span>
        <span class="font-thin">Currently working on</span>
        <span class="font-serif">DDW</span> /
        <span class="font-thin">Currently working on</span> DDW / Currently
        working on DDW /
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
