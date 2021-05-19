<template>
  <div
    class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] md:pt-[165px] md:pb-[228px] 2xl:px-[55px]"
  >
    <MetaTags :title="title" :description="description" />
    <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
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
      <ProjectCard
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
          title: "Beyond the Lipstick",
          description:
            "Graduation Collection 2019 – MA Menswear, Westminster University",
          category: "fashion",
          img: {
            jpg: "/images/beyond-the-lipstick-thumbnail.jpg",
            webp: "/images/beyond-the-lipstick-thumbnail.webp",
            avif: "/images/beyond-the-lipstick-thumbnail.avif",
            width: "640",
            height: "427",
            alt: "Beyond the Lipstick"
          },
          slug: "beyond-the-lipstick"
        },
        {
          order: 2,
          title: "No Unlocals",
          description:
            "Graduation Collection 2019 – MA Menswear, Westminster University",
          category: "fashion",
          img: {
            jpg: "/images/no-unlocals-thumbnail.jpg",
            webp: "/images/no-unlocals-thumbnail.webp",
            avif: "/images/no-unlocals-thumbnail.avif",
            width: "640",
            height: "872",
            alt: "No Unlocals"
          },
          slug: "no-unlocals"
        },
        {
          order: 3,
          title: "It’s Not a Flower",
          description:
            "Graduation Collection - MA Textile, Swedish School of Textiles",
          category: "textile",
          img: {
            jpg: "/images/its-not-a-flower-thumbnail.jpg",
            webp: "/images/its-not-a-flower-thumbnail.webp",
            avif: "/images/its-not-a-flower-thumbnail.avif",
            width: "1100",
            height: "777",
            alt: "It's Not a Flower"
          },
          slug: "its-not-a-flower"
        },
        {
          order: 4,
          title: "Floral Lines",
          description:
            "Graduation Collection 2014 - BA Fashion, Willem de Kooning Academie",
          category: "fashion",
          img: {
            jpg: "/images/floral-lines-thumbnail.jpg",
            webp: "/images/floral-lines-thumbnail.webp",
            avif: "/images/floral-lines-thumbnail.avif",
            width: "410",
            height: "615",
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
