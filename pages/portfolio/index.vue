<template>
  <div
    class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] md:pt-[165px] md:pb-[228px] 2xl:px-[55px]"
  >
    <meta-tags :title="title" :description="description" />
    <breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <h1
      class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:text-[90px] md:leading-[90px]"
    >
      Portfolio
    </h1>
    <div
      class="mt-[10px] font-light text-[14px] leading-[20px] md:mt-[25px] md:text-[18px] md:leading-[20px]"
    >
      Filter by:
      <button
        class="ml-[30px] font-light"
        :class="{
          'font-medium': !selectedCategory || selectedCategory === 'all'
        }"
        @click="selectCategory('all')"
      >
        all
      </button>
      <button
        class="ml-[30px] font-light"
        :class="{
          'font-medium': selectedCategory === 'fashion'
        }"
        @click="selectCategory('fashion')"
      >
        fashion
      </button>
      <button
        class="ml-[30px] font-light"
        :class="{
          'font-medium': selectedCategory === 'textile'
        }"
        @click="selectCategory('textile')"
      >
        textile
      </button>
    </div>
    <ul
      class="mt-[20px] md:mt-[40px] md:grid project-grid md:gap-y-[90px] md:gap-x-[50px]"
    >
      <project-card
        v-for="project in filteredProjects"
        :key="project.slug"
        :title="project.title"
        :description="project.description"
        :category="project.category"
        :img="project.img"
        :slug="project.slug"
        :class="`div${project.order}`"
      />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "Portfolio", link: "/portfolio" }
      ],
      title: "Portfolio",
      description: "",
      projects: [
        {
          order: 1,
          title: "Soft! 2021",
          description: "2021 Soft! Exposition @ Rademakers Gallery",
          category: "textile",
          img: {
            jpg: "/images/portfolio/soft!-2021-portfoliopage.jpg",
            width: "1100",
            height: "733",
            alt: "Soft! 2021"
          },
          slug: "soft-2021"
        },
        {
          order: 2,
          title: "Beyond the Lipstick",
          description: "Amsterdam Fashion Week 2020 – Visions of Duran Lantink",
          category: "fashion",
          img: {
            jpg: "/images/portfolio/beyond-the-lipstick-portfoliopage.jpg",
            width: "1100",
            height: "733",
            alt: "Beyond the Lipstick"
          },
          slug: "beyond-the-lipstick"
        },
        {
          order: 3,
          title: "Scarf project",
          description: "2020 - collaboration with Coccon",
          category: "textile",
          img: {
            jpg: "/images/portfolio/scarf-project-portfoliopage.jpg",
            width: "1100",
            height: "1100",
            alt: "Scarf project"
          },
          slug: "scarf-project"
        },
        {
          order: 4,
          title: "No Unlocals",
          description:
            "Graduation Collection 2019 – MA Menswear, Westminster University",
          category: "fashion",
          img: {
            jpg: "/images/portfolio/no-unlocals-portfoliopage.jpg",
            width: "1100",
            height: "1498",
            alt: "No Unlocals"
          },
          slug: "no-unlocals"
        },
        {
          order: 5,
          title: "It’s Not a Flower",
          description:
            "Graduation Collection - MA Textile, Swedish School of Textiles",
          category: "textile",
          img: {
            jpg: "/images/portfolio/it's-not-a-flower-projectpagina.jpg",
            width: "1100",
            height: "777",
            alt: "It's Not a Flower"
          },
          slug: "its-not-a-flower"
        },
        {
          order: 6,
          title: "Floral Lines",
          description:
            "Graduation Collection 2014 - BA Fashion, Willem de Kooning Academie",
          category: "fashion",
          img: {
            jpg: "/images/portfolio/floral-lines-portfoliopage.jpg",
            width: "1100",
            height: "1650",
            alt: "Floral Lines"
          },
          slug: "floral-lines"
        }
      ],
      selectedCategory: null
    };
  },
  computed: {
    filteredProjects() {
      if (!this.selectedCategory || this.selectedCategory === "all") {
        return this.projects;
      } else if (this.selectedCategory === "textile") {
        return this.projects.filter(project => project.category === "textile");
      } else if (this.selectedCategory === "fashion") {
        return this.projects.filter(project => project.category === "fashion");
      }
    }
  },
  methods: {
    selectCategory(cat) {
      this.selectedCategory = cat;
      console.log(this.selectedCategory);
    }
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 2 / 7;
  }
  .div3 {
    grid-area: 2 / 1 / 3 / 6;
  }
  .div4 {
    grid-area: 3 / 1 / 4 / 3;
  }
  .div5 {
    grid-area: 3 / 3 / 4 / 5;
  }
  .div6 {
    grid-area: 3 / 5 / 4 / 7;
  }
}
</style>
