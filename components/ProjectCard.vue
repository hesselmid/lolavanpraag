<template>
  <li class="mt-[40px] mx-auto md:w-full md:m-0">
    <img class="w-full" :src="img" />
    <div class="mt-[10px] md:mt-[20px]">
      <div class="flex justify-between">
        <h2
          class="font-light text-[22px] leading-[31px] md:text-[24px] md:leading-[33px]"
        >
          {{ title }}
        </h2>
        <div
          class="inline-block mt-[3px] py-[3px] px-[10px] border rounded-[13px] border-electric-pink font-light text-[12px] leading-[17px] text-electric-pink lowercase md:text-[14px] md:leading-[19px]"
          :class="{
            'border-electric-pink': category === 'fashion',
            'text-electric-pink': category === 'fashion',
            'border-apple-green': category === 'textile',
            'text-apple-green': category === 'textile'
          }"
        >
          {{ category }}
        </div>
      </div>
      <p
        class="mt-[7px] w-[250px] font-light text-[14px] leading-[19px] md:mt-[5px] md:w-full md:text-[18px] md:leading-[24px]"
      >
        {{ description }}
      </p>

      <BaseLink
        class="mt-[15px] ml-[20px] group md:mt-[20px] md:ml-[30px]"
        black="true"
        :link="`/portfolio/${slug}`"
        >View Project</BaseLink
      >
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
