<template>
  <div>
    <div
      class="container mx-auto pt-[86px] px-[17.5px] md:px-[30px] md:pt-[165px] 2xl:px-[55px]"
    >
      <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />

      <div
        class="container mx-auto mt-[20px] xl:grid xl:grid-cols-2 xl:gap-x-[115px]"
      >
        <div>
          <h1
            class="font-serif font-light text-[32px] leading-[32px] md:text-[90px] md:leading-[80px]"
          >
            About me
          </h1>
          <p
            class="mt-[10px] font-light leading-[22px] md:mt-[20px] md:text-[24px] md:leading-[30px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p
            class="mt-[10px] font-light leading-[22px] md:mt-[20px] md:text-[24px] md:leading-[30px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <img
            class="pt-[30px] md:w-[460px] xl:pt-[244px]"
            src="~/assets/images/lola-van-praag-portrait.jpg"
          />
        </div>
      </div>

      <lite-youtube
        class="mt-[30px] max-w-[1440px] 2xl:mt-[40px]"
        style="background-image: url('https://i.ytimg.com/vi/ogfYd705cRs/hqdefault.jpg');"
        videoid="A61dZiKAUpI"
        params="controls=0&modestbranding=1&rel=0&enablejsapi=1"
      />
    </div>

    <FollowMe class="mt-[48px] mb-[100px] 2xl:mt-[135px] 2xl:mb-[100px]" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "About me", link: "/about" }
      ]
    };
  }
};
</script>
