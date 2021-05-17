<template>
  <div
    class="fixed z-50 bottom-[20px] left-0 right-0 container mx-auto px-[17.5px] md:px-[30px] xl:px-[55px] 2xl:bottom-[47px]"
    v-if="isOpen"
  >
    <div
      class="relative bg-apple-green pt-[36px] pb-[15px] px-[25px] 2xl:pt-[15px] 2xl:pl-[30px]"
    >
      <img
        class="absolute top-[15px] right-[15px] w-[10px] 2xl:top-[38px] 2xl:right-[39px] 2xl:w-[15px]"
        src="~assets/images/cross.svg"
        @click="deny"
      />
      <div
        class="font-light text-[14px] leading-[19px] text-center 2xl:inline-block 2xl:text-[19px] 2xl:leading-[26px] 2xl:text-left"
      >
        I use Google Analytics to track how many people visit this website.
        Click Accept to help me improve my content.
      </div>
      <button
        class="block mt-[20px] mx-auto bg-electric-pink pt-[16px] pb-[20px] px-[54.5px] font-light text-[18px] leading-[24px] lowercase 2xl:inline-block 2xl:mt-0 2xl:ml-[56px]"
        @click="accept"
      >
        Accept
      </button>
    </div>
  </div>
</template>

<script>
import { bootstrap } from "vue-gtag";

export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted");
      }
    },
    accept() {
      if (process.browser) {
        bootstrap().then(gtag => {
          this.isOpen = false;
          localStorage.setItem("GDPR:accepted", true);
          // location.reload();
        });
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    }
  },
  mounted() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  }
};
</script>
