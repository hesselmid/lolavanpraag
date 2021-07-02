<template>
  <div
    class="fixed inset-0 grid grid-flow-row auto-rows-min bg-dusty-orange md:grid-cols-2 md:grid-rows-0"
  >
    <div class="md:order-2">
      <button
        class="fixed top-0 left-0 p-[17.5px] z-10 md:py-[50px] md:px-[30px] 2xl:px-[55px]"
        @click="closeFabricExplanation"
      >
        <img class="md:w-[24px]" src="~/assets/images/cross.svg" />
      </button>

      <img
        class="md:h-screen md:object-cover md:object-center"
        src="/images/home/scarf.jpg"
        alt=""
        width="1080"
        height="1080"
      />
    </div>
    <div
      class="mt-[20px] px-[17.5px] md:order-1 md:h-screen md:flex md:flex-col md:justify-center md:px-[30px] 2xl:px-[55px]"
    >
      <h2
        class="font-serif font-light text-[32px] leading-[32px] md:text-[50px] md:leading-[73px]"
      >
        Scarf project (2021)
      </h2>
      <p
        class="mt-[20px] font-light leading-[22px] md:mt-[30px] md:text-[24px] md:leading-[30px]"
      >
        For me a scarf can be seen as a piece that moves between being an object
        and a wearable. The floral prints that I designed for the collection NO
        UNLOCALS was translated in new color ways and produced in collaboration
        by Coccon crafts loom. They are a company located in Jharkand India. The
        scarves are produced eco-friendly and are made of Peace silk (This means
        that the caterpillar can complete its entire life cycle.) In addition,
        Coccon trains women so that they can work within the company and do not
        have to be financially dependent on their man.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeFabricExplanation() {
      this.$emit("closeFabricExplanation");
    }
  }
};
</script>
