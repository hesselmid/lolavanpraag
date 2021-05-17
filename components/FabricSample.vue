<template>
  <div class="relative">
    <img
      class="w-[80px] h-[80px] rounded-full overflow-visible md:w-[190px] md:h-[190px]"
      :src="image"
      width="190px"
      height="190px"
      alt=""
    />
    <img
      class="absolute top-[-8px] right-[-8px] md:hidden"
      src="~/assets/images/click-here.png"
      width="31px"
      height="39px"
      alt=""
    />
    <img
      class="hidden absolute top-[-20px] right-[26px] md:block"
      src="~/assets/images/click-here-lg.png"
      width="59px"
      height="29px"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: ["image"]
};
</script>
