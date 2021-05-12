<template>
  <li class="mt-[40px] mx-auto 2xl:w-full 2xl:m-0">
    <img class="w-full" :src="img" />
    <div class="mt-[10px] 2xl:mt-[20px]">
      <div class="flex justify-between">
        <h2
          class="font-light text-[22px] leading-[31px] 2xl:text-[24px] 2xl:leading-[33px]"
        >
          {{ title }}
        </h2>
        <div
          class="inline-block mt-[3px] py-[3px] px-[10px] border rounded-[13px] border-electric-pink font-light text-[12px] leading-[17px] text-electric-pink lowercase 2xl:text-[14px] 2xl:leading-[19px]"
        >
          {{ category }}
        </div>
      </div>
      <p
        class="mt-[7px] w-[250px] font-light text-[14px] leading-[19px] 2xl:mt-[5px] 2xl:w-full 2xl:text-[18px] 2xl:leading-[24px]"
      >
        {{ description }}
      </p>
      <div class="mt-[15px] ml-[20px] group 2xl:mt-[20px] 2xl:ml-[30px]">
        <div>
          <img
            class="inline-block w-[18px] group-hover:hidden"
            src="~assets/images/arrow.svg"
          />
          <img
            class="hidden w-[18px] group-hover:inline-block"
            src="~assets/images/arrow-pink.svg"
          />

          <div
            class="ml-[29px] inline-block leading-[22px] lowercase group-hover:text-electric-pink group-hover:underline 2xl:text-[18px] 2xl:leading-[24px]"
          >
            View project
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "description", "category", "img", "slug"]
};
</script>

<style scoped>
li:first-of-type {
  margin-top: 0;
}
</style>
