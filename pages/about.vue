<template>
  <div>
    <MetaTags :title="title" :description="description" />
    <div
      class="
        container
        mx-auto
        pt-[86px]
        px-[17.5px]
        md:px-[30px]
        md:pt-[165px]
        2xl:px-[55px]
      "
    >
      <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />

      <div
        class="
          container
          mx-auto
          mt-[20px]
          xl:grid xl:grid-cols-2
          xl:gap-x-[115px]
        "
      >
        <div>
          <h1
            class="
              font-serif font-light
              text-[32px]
              leading-[32px]
              md:text-[90px]
              md:leading-[80px]
            "
          >
            About me
          </h1>
          <p
            class="
              mt-[10px]
              font-light
              leading-[22px]
              md:mt-[20px]
              md:text-[24px]
              md:leading-[30px]
            "
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
            class="
              mt-[10px]
              font-light
              leading-[22px]
              md:mt-[20px]
              md:text-[24px]
              md:leading-[30px]
            "
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
        <div class="pt-[30px] xl:pt-[244px]">
          <picture>
            <source
              srcset="/images/home/lola-van-praag.avif"
              type="image/avif"
            />
            <source
              srcset="/images/home/lola-van-praag.webp"
              type="image/webp"
            />
            <source
              srcset="/images/home/lola-van-praag.jpg"
              type="image/jpeg"
            />
            <img
              class="w-[270px] md:w-[460px]"
              src="/images/home/lola-van-praag.jpg"
              alt="Lola van Praag"
              width="460"
              height="595"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="mt-[53px] md:mt-[120px]">
      <div class="container mx-auto px-[17.5px] md:px-[30px] 2xl:px-[55px]">
        <h2
          class="
            font-serif font-light
            text-[24px]
            leading-[32px]
            md:text-[60px]
            md:leading-[86px]
          "
        >
          Worked with
        </h2>
      </div>
      <div class="mt-[10px] w-full overflow-y-hidden">
        <div
          class="
            pl-[17.5px]
            md:pl-[30px]
            2xl:pl-[55px]
            font-serif font-light
            text-[70px]
            leading-[70px]
            text-electric-pink
            uppercase
            whitespace-nowrap
            2xl:text-[180px]
            2xl:leading-[180px]
          "
        >
          Amsterdam Fashion Week - Hermes - Vogue
        </div>
      </div>
      <div class="w-full overflow-y-hidden">
        <div
          class="
            pl-[17.5px]
            md:pl-[30px]
            2xl:pl-[55px]
            font-serif font-light
            text-[70px]
            leading-[70px]
            text-electric-pink
            uppercase
            whitespace-nowrap
            2xl:text-[180px]
            2xl:leading-[180px]
          "
        >
          Vogue / Hermes
        </div>
      </div>
      <div class="w-full overflow-y-hidden">
        <div
          class="
            pl-[17.5px]
            md:pl-[30px]
            2xl:pl-[55px]
            font-serif font-light
            text-[70px]
            leading-[70px]
            text-electric-pink
            uppercase
            whitespace-nowrap
            2xl:text-[180px]
            2xl:leading-[180px]
          "
        >
          HERMES / Lorem / Amsterdam Fashion Week - Hermes - Vogue
        </div>
      </div>
    </div>

    <div class="container mx-auto px-[17.5px] md:px-[30px] 2xl:px-[55px]">
      <div class="mt-[51px] md:mt-[105px]">
        <h2
          class="
            font-serif font-light
            text-[24px]
            leading-[32px]
            md:text-[60px]
            md:leading-[86px]
          "
        >
          Proces
        </h2>
        <p
          class="
            mt-[7px]
            font-light
            leading-[22px]
            2xl:mt-[14px]
            2xl:max-w-[869px]
            2xl:text-[24px]
            2xl:leading-[30px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <lite-youtube
        class="mt-[30px] max-w-[1440px] md:mt-[40px]"
        style="
          background-image: url('/images/beyond-the-lipstick-preview.jpg');
        "
        videoid="A61dZiKAUpI"
        params="controls=0&modestbranding=1&rel=0&enablejsapi=1"
      />
    </div>

    <div class="mt-[53px] md:mt-[120px]">
      <div class="container mx-auto px-[17.5px] md:px-[30px] 2xl:px-[55px]">
        <h2
          class="
            font-serif font-light
            text-[24px]
            leading-[32px]
            md:text-[60px]
            md:leading-[86px]
          "
        >
          Awards &#38; Nominations
        </h2>
      </div>
      <div class="mt-[10px] w-full overflow-y-hidden">
        <div
          class="
            pl-[17.5px]
            md:pl-[30px]
            2xl:pl-[55px]
            font-serif font-light
            text-[70px]
            leading-[70px]
            text-apple-green
            uppercase
            whitespace-nowrap
            2xl:text-[180px]
            2xl:leading-[180px]
          "
        >
          new wave - 2019 / amfi young talent -2018
        </div>
      </div>
      <div class="w-full overflow-y-hidden">
        <div
          class="
            pl-[17.5px]
            md:pl-[30px]
            2xl:pl-[55px]
            font-serif font-light
            text-[70px]
            leading-[70px]
            text-apple-green
            uppercase
            whitespace-nowrap
            2xl:text-[180px]
            2xl:leading-[180px]
          "
        >
          amfi young talent -2018
        </div>
      </div>
      <div class="w-full overflow-y-hidden">
        <div
          class="
            pl-[17.5px]
            md:pl-[30px]
            2xl:pl-[55px]
            font-serif font-light
            text-[70px]
            leading-[70px]
            text-apple-green
            uppercase
            whitespace-nowrap
            2xl:text-[180px]
            2xl:leading-[180px]
          "
        >
          Dutch fashion award
        </div>
      </div>
    </div>

    <FollowMe class="mt-[48px] mb-[100px] md:mt-[135px] 2xl:mb-[100px]" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "About me", link: "/about" }
      ],
      title: "About Me",
      description: ""
    };
  }
};
</script>
