<template>
  <div class="pt-[86px] pb-[100px] md:pt-[165px] md:pb-[228px] ">
    <meta-tags :title="title" :description="description" />
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:mt-[15px] md:text-[90px] md:leading-[90px]"
      >
        Scarf project
      </h1>
      <p
        class="mt-[10px] font-light leading-[22px] md:mt-[15px] md:max-w-[640px] md:text-[24px] md:leading-[30px]"
      >
        Floral Lines represents the way global and local processes intersect
        with each other in one particular area, the Flower Bulb Region, and form
        a new hybrid aesthetic. An area which is still deeply organized around
        tradition and religion, but at the same time being heavily changed by
        the process of globalization. This phenomenon is beautifully illustrated
        by the newly opened McDonalds and its big ‘M’ towering and shining
        bright above the widespread flower fields.
      </p>
      <div
        class="lg:mt-[50px] lg:grid lg:grid-cols-5 lg:grid-rows-5 lg:gap-x-[46px]"
      >
        <div
          class="col-span-3 row-span-1 lg:flex lg:flex-col lg:justify-center lg:mx-auto"
        >
          <h2
            class="mt-[20px] font-medium leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-0"
          >
            Materials used:
          </h2>
          <ul>
            <li
              class="font-light leading-[22px] md:text-[24px] md:leading-[30px]"
            >
              Eco Peace silk printed with eco friendly and GOTS certified zero
              impact inkjet digital print
            </li>
          </ul>
          <h2
            class="mt-[20px] font-medium leading-[22px] md:text-[24px] md:leading-[30px] xl:mt-[50px]"
          >
            Find this collection at the following gallery:
          </h2>
          <a
            class="leading-[22px] underline md:text-[24px] md:leading-[30px]"
            href="https://www.rademakersgallery.com/"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            Rademarkers Gallery
          </a>
        </div>
        <div class="mt-[30px] col-span-2 row-span-3">
          <img
            class="w-full"
            src="/images/scarf-project/scarf-project-2.jpg"
            alt="Scarf project #2"
            width="640"
            height="960"
          />
        </div>
        <div class="mt-[15px] col-span-3 row-span-4">
          <img
            class="w-full"
            src="/images/scarf-project/scarf-project-1.jpg"
            alt="Scarf project #1"
            width="800"
            height="1200"
          />
        </div>
        <div
          class="hidden col-span-2 row-span-2 lg:flex lg:justify-center lg:items-center"
        >
          <blockquote
            class="font-serif font-light text-[60px] leading-[58px] text-center"
          >
            “This phenomenon is beautifully illustrated by the newly opened
            McDonalds and its big M”
          </blockquote>
        </div>
      </div>
    </div>

    <marquee class="hidden lg:block" />

    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <p
        class="mt-[30px] font-light leading-[22px] md:text-[24px] md:leading-[30px] lg:mt-[69px] lg:ml-[231px] lg:max-w-[640px]"
      >
        For my final exam I was inspired by the visual consequences of this
        phenomenon, but also by the social transformations which it implies.
        Traditional opinions about gender have changed, and this is reflected in
        what people are ought to wear. In my collection I tried to mix
        traditional pieces like the overall, and traditional techniques like
        embroidery with shiny and colorful fabrics, and rethought shapes.
      </p>
    </div>
    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
      <blockquote
        class="mt-[50px] font-serif font-light text-[34px] leading-[40px] text-electric-pink text-center lg:mt-[116px] lg:text-[80px] lg:leading-[70px]"
      >
        “I tried to mix traditional pieces like the overall, and traditional
        techniques like embroidery with shiny and colorful fabrics, and
        rethought shapes.”
      </blockquote>

      <div
        class="mt-[50px] lg:mt-[143px] lg:grid lg:grid-cols-2 lg:gap-x-[50px]"
      >
        <div class="lg:mt-[125px] lg:ml-[118px]">
          <img
            class="w-full"
            src="/images/scarf-project/scarf-project-3.jpg"
            alt="Scarf project #3"
            width="640"
            height="640"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Scarf project", link: "/portfolio/scarf-project" }
      ],
      title: "Scarf project",
      description: "",
      showAnimation1: false,
      showAnimation2: false,
      showAnimation3: false
    };
  },
  methods: {
    isViewableNow(isVisible, entry) {
      this.showAnimation1 = isVisible;
      this.showAnimation2 = isVisible;
      this.showAnimation3 = isVisible;
    }
  }
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .animation-1 {
    animation: sample-1 8s linear;
  }

  @keyframes sample-1 {
    from {
      transform: translateX(-500px) rotate(0deg);
    }
    to {
      transform: translateX(0px) rotate(360deg);
    }
  }

  .animation-2 {
    animation: sample-2 7s linear;
  }

  @keyframes sample-2 {
    from {
      transform: translateX(-500px) rotate(0deg);
    }
    to {
      transform: translateX(0px) rotate(360deg);
    }
  }

  .animation-3 {
    animation: sample-3 6s linear;
  }

  @keyframes sample-3 {
    from {
      transform: translateX(-500px) rotate(0deg);
    }
    to {
      transform: translateX(0px) rotate(360deg);
    }
  }
}
</style>
