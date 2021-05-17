<template>
  <div
    class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] md:pt-[165px] md:pb-[228px] 2xl:px-[55px]"
  >
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
      <button class="ml-[30px] font-light" @click="selectCategory('all')">
        all
      </button>
      <button class="ml-[30px] font-light" @click="selectCategory('fashion')">
        fashion
      </button>
      <button class="ml-[30px] font-light" @click="selectCategory('textile')">
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
      projects: [
        {
          order: 1,
          title: "Beyond the Lipstick",
          description:
            "Graduation Collection 2019 – MA Menswear, Westminster University",
          category: "fashion",
          img: require(`~/assets/images/project-thumbnail-1.jpg`),
          slug: "beyond-the-lipstick"
        },
        {
          order: 2,
          title: "No Unlocals",
          description:
            "Graduation Collection 2019 – MA Menswear, Westminster University",
          category: "fashion",
          img: require(`~/assets/images/project-thumbnail-1.jpg`),
          slug: "no-unlocals"
        },
        {
          order: 3,
          title: "It’s Not a Flower",
          description:
            "Graduation Collection - MA Textile, Swedish School of Textiles",
          category: "textile",
          img: require(`~/assets/images/project-thumbnail-2.jpg`),
          slug: "its-not-a-flower"
        },
        {
          order: 4,
          title: "Floral Lines",
          description:
            "Graduation Collection 2014 - BA Fashion, Willem de Kooning Academie",
          category: "fashion",
          img: require(`~/assets/images/project-thumbnail-3.jpg`),
          slug: "floral-lines"
        }
      ]
    };
  },
  computed: {
    filteredProjects() {
      return this.projects;
    }
  },
  methods: {
    selectCategory(cat) {
      this.projects.filter(project => project.category === cat);
    }
  },
  head: {
    title: "Portfolio | lolavanpraag.com",
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
