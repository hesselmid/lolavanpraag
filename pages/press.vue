<template>
  <div class="bg-dusty-orange">
    <meta-tags :title="title" :description="description" />
    <div
      class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] md:pt-[165px] md:pb-[228px] 2xl:px-[55px]"
    >
      <breadcrumbs :breadcrumbs="breadcrumbs" color="#C55F00" />
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
                target="_blank"
                rel="nofollow noreferrer noopener"
                >{{ pressItem.title }}</a
              >
              <img
                class="hidden lg:group-hover:block fixed top-[184.5px] right-0 w-[500px]"
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
      title: "Press",
      description: "",
      pressList: [
        {
          year: 2020,
          pressItems: [
            {
              title:
                "AFW - Maak Kennis met de Visions Of Talenten: Lola van Praag",
              link:
                "https://amsterdamfashionweek.nl/maak-kennis-met-de-visions-of-talenten-lola-van-praag/",
              img: "/images/press/afw-2020.png"
            },
            {
              title: "Leidsch Dagblad - Focus op mode: Lola van Praag",
              link: "https://www.leidschdagblad.nl/cnt/dmf20210309_32908091",
              img: "/images/press/leidsch-dagblad-2020.png"
            }
          ]
        },
        {
          year: 2019,
          pressItems: [
            {
              title: "Dazed - Westminster Menswear",
              link:
                "https://www.dazeddigital.com/fashion/gallery/27597/0/westminster-menswear-ma-2019",
              img: require(`~/assets/images/press-placeholder kopie.jpg`)
            },
            {
              title: "Fashion Crossover London - Inflatable couture",
              link:
                "https://www.fashioncrossover-london.com/inflatable-couture-kitchen-aprons-and-fashion-elves-spotted-at-the-westminster-2019-ma-menswear-show-i1836",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "City countdown",
              link:
                "https://citycountdown.com/index.php/2019/06/10/university-of-westminister-ma-menswear/",
              img: require(`~/assets/images/press-placeholder.jpg`)
            }
          ]
        },
        {
          year: 2017,
          pressItems: [
            {
              title: "The Issue Magazine",
              link: "http://www.theissuemagazine.com/LOLA-VAN-PRAAG",
              img: require(`~/assets/images/press-placeholder.jpg`)
            }
          ]
        },
        {
          year: 2014,
          pressItems: [
            {
              title: "Schön! Magazine - one of a kind",
              link: "https://schonmagazine.com/oneofakind/",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "HNTK - Lichting",
              link: "https://htnk.nl/news/lichting-2014",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "Telegraaf - Dit zijn de modetalenten van Lichting",
              link:
                "https://www.telegraaf.nl/nieuws/457965/dit-zijn-de-modetalenten-van-lichting-2014",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "Textilia - Bastian Visch wint Lichting",
              link:
                "https://www.textilia.nl/Nieuws/Bastian_Visch_wint_Lichting_2014-140713214700#.XSSobZMzZhE",
              img: require(`~/assets/images/press-placeholder.jpg`)
            },
            {
              title: "BRANKOPOPOVICBLOG - Lichting supported by V&D",
              link:
                "http://brankopopovic.blogspot.com/2014/07/lichting-2014-supported-by-v.html#.XSSpYpMzZhE",
              img: require(`~/assets/images/press-placeholder.jpg`)
            }
          ]
        }
      ]
    };
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
