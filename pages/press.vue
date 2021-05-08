<template>
  <div class="bg-dusty-orange">
    <div
      class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] 2xl:px-[55px]"
    >
      <Breadcrumbs :breadcrumbs="breadcrumbs" color="#C55F00" />
      <h1 class="mt-[20px] font-serif font-light text-[32px] leading-[32px]">
        Press
      </h1>
      <ul class="press-list mt-[50px]">
        <li
          class="border-t border-[#C55F00] mt-[50px] pt-[50px] press-year"
          v-for="pressYear in pressList"
          :key="pressYear.year"
        >
          <h2 class="font-light leading-[22px]">{{ pressYear.year }}</h2>
          <ul class="press-items">
            <li
              class="mt-[50px]"
              v-for="pressItem in pressYear.pressItems"
              :key="pressItem.title"
            >
              <a
                class="font-serif font-light text-[26px] leading-[32px]"
                :href="pressItem.link"
                >{{ pressItem.title }}</a
              >
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
            { title: "Dazed - Westminster Menswear", link: "" },
            {
              title: "Fashion Crossover London - Inflatable couture",
              link: ""
            },
            { title: "City countdown", link: "" }
          ]
        },
        {
          year: 2017,
          pressItems: [{ title: "The Issue Magazine", link: "" }]
        },
        {
          year: 2014,
          pressItems: [
            { title: "Schön! Magazine - one of a kind", link: "" },
            {
              title: "HNTK - Lichting",
              link: ""
            },
            {
              title: "Telegraaf - Dit zijn de modetalenten van Lichting",
              link: ""
            },
            {
              title: "Textilia - Bastian Visch wint Lichting",
              link: ""
            },
            {
              title: "BRANKOPOPOVICBLOG - Lichting supported by V&D",
              link: ""
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
</style>
