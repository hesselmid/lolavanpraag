<template>
  <div class="bg-dusty-orange">
    <div
      class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] md:pt-[165px] md:pb-[228px] 2xl:px-[55px]"
    >
      <Breadcrumbs :breadcrumbs="breadcrumbs" color="#C55F00" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:text-[90px] md:leading-[80px]"
      >
        Press
      </h1>
      <ul class="press-list mt-[50px] md:mt-[100px]">
        <li
          class="mt-[50px] md:mt-[100px]"
          v-for="pressYear in pressList"
          :key="pressYear.year"
        >
          <div
            class="border-t border-[#C55F00] pt-[50px] md:max-w-[411px]"
          ></div>
          <h2
            class="font-light leading-[22px] md:text-[30px] md:leading-[80px]"
          >
            {{ pressYear.year }}
          </h2>
          <ul class="press-items">
            <li
              class="group mt-[50px] md:mt-[100px]"
              v-for="pressItem in pressYear.pressItems"
              :key="pressItem.title"
            >
              <a
                class="font-serif font-light text-[26px] leading-[32px] hover:font-sans hover:font-extralight hover:italic hover:text-apple-green hover:underline md:text-[75px] md:leading-[75px]"
                :href="pressItem.link"
                >{{ pressItem.title }}</a
              >
              <img
                class="hidden group-hover:lg:block fixed top-[184.5px] right-0"
                :src="pressItem.img"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "Press", link: "/press" }
      ],
      pressList: [
        {
          year: 2019,
          pressItems: [
            {
              title: "Dazed - Westminster Menswear",
              link: "",
              img: require(`~/assets/images/press-placeholder kopie.jpg`)
            },
            {
              title: "Fashion Crossover London - Inflatable couture",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "City countdown",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            }
          ]
        },
        {
          year: 2017,
          pressItems: [
            {
              title: "The Issue Magazine",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            }
          ]
        },
        {
          year: 2014,
          pressItems: [
            {
              title: "Schön! Magazine - one of a kind",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "HNTK - Lichting",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "Telegraaf - Dit zijn de modetalenten van Lichting",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "Textilia - Bastian Visch wint Lichting",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "BRANKOPOPOVICBLOG - Lichting supported by V&D",
              link: "",
              img: require(`~/assets/images/press-placeholder.jpg`)
            }
          ]
        }
      ]
    };
  },
  head: {
    title: "Press | lolavanpraag.com",
    meta: [
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ]
  }
};
</script>

<style>
.press-list > li:first-of-type {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}

.press-items > li:first-of-type {
  margin-top: 30px;
}

@media (min-width: 768px) {
  .press-items > li:first-of-type {
    margin-top: 45px;
  }
}
</style>
