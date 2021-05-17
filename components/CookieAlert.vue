<template>
  <div class="fixed z-50 bottom-[20px] right-[20px] mx-auto" v-if="isOpen">
    <div
      class="relative bg-apple-green max-w-[340px] mx-auto pt-[36px] pb-[15px] px-[25px]"
    >
      <img
        class="absolute top-[15px] right-[15px] w-[10px]"
        src="~assets/images/cross.svg"
        @click="deny"
      />
      <div class="font-light text-[14px] leading-[19px] text-center">
        I use Google Analytics to track how many people visit this website.
        Click Accept to help me improve my content.
      </div>
      <button
        class="block mt-[20px] mx-auto bg-electric-pink pt-[16px] pb-[20px] px-[54.5px] font-light text-[18px] leading-[24px] lowercase"
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
