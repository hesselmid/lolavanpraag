<template>
  <div>
    <meta-tags :title="title" :description="description" />
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
      <breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />

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
            Lola van Praag (1992, Amsterdam, Netherlands) is a Dutch textile and
            fashion designer based in Leiden. She followed two master's degrees.
            One in textile design at the Swedish School of Textiles (Borås,
            Sweden) where she focused on industrial knitting and printing
            techniques and a second in fashion design at the University of
            Westminster (London, UK) with a specialization in menswear. After
            graduating she moved back to the Netherlands where she started her
            own studio.
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
            Lola's love for creating does not lie in producing an end product,
            but mainly in the process that precedes it. She likes to experiment
            with materials in order to discover their hidden potential. She is
            very curious about different craft techniques and how these methods
            can be applied in a contemporary way. Because of her often
            unorthodox methods in which manual and mechanical merge, surprising
            results are achieved.
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
            She combines these technical elaborations with idiosyncratic color
            combinations and a preference for glitter. She brings all this
            together in a series of different creative excesses, from fashion
            collection to wall objects.
          </p>
        </div>
        <div class="pt-[30px] xl:pt-[244px]">
          <img
            class="w-[270px] md:w-[460px]"
            src="/images/about/lola-van-praag.jpg"
            alt="Lola van Praag"
            width="460"
            height="690"
          />
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
          Hans Boodt / Amsterdam Fashion Week
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
          Jett Rebel / Codarts / Textiel Museum Tilburg
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
          Dutch Design Week
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
          Latest fashion show
        </h2>
        <!-- <p
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
          She combines these technical elaborations with idiosyncratic color
          combinations and a preference for glitter. She brings all this
          together in a series of different creative excesses, from fashion
          collection to wall objects.
        </p> -->
      </div>

      <lite-youtube
        class="mt-[30px] max-w-[1440px] md:mt-[40px]"
        style="
          background-image: url('/images/about/beyond-the-lipstick-preview.jpg');
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
          2020 Talentprogram “Visions of” with Duran Lantink during Amsterdam
          fashion week
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
          2014 “Lichting Fashion show” Amsterdam Fashion week, The Netherlands
        </div>
      </div>
      <!-- <div class="w-full overflow-y-hidden">
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
      </div> -->
    </div>

    <follow-me class="mt-[48px] mb-[100px] md:mt-[135px] 2xl:mb-[100px]" />
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
      description:
        "Lola van Praag (1992, Amsterdam, Netherlands) is a Dutch textile and fashion designer based in Leiden."
    };
  }
};
</script>
