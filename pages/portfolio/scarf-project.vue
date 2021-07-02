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
        For me a scarf can be seen as a piece that moves between being an object
        and a wearable. The floral prints that I designed for the collection
        <nuxt-link class="underline" to="/portfolio/no-unlocals"
          >NO UNLOCALS</nuxt-link
        >
        was translated in new color ways and produced in collaboration by Coccon
        crafts loom. They are a company located in Jharkand India. The scarves
        are produced eco-friendly and are made of Peace silk (This means that
        the caterpillar can complete its entire life cycle.) In addition, Coccon
        trains women so that they can work within the company and do not have to
        be financially dependent on their man.
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
            “For me a scarf can be seen as a piece that moves between begin an
            object and a wearable.”
          </blockquote>
        </div>
      </div>
    </div>

    <marquee class="hidden lg:block" />

    <div class="container mx-auto px-[17.5px] md:px-[30px] lg:px-[55px]">
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
      description:
        "For me a scarf can be seen as a piece that moves between being an object and a wearable.",
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
