<template>
  <div
    class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] lg:pt-[165px] lg:pb-[228px] lg:px-[55px]"
  >
    <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <h1
      class="mt-[20px] font-serif font-light text-[32px] leading-[32px] lg:text-[90px] lg:leading-[90px]"
    >
      Portfolio
    </h1>
    <ul
      class="mt-[20px] lg:mt-[40px] lg:grid project-grid lg:gap-y-[90px] lg:gap-x-[50px]"
    >
      <ProjectCard
        v-for="project in projects"
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
          title: "No Unlocals",
          description:
            "Graduation Collection 2019 – MA Menswear, Westminster University",
          category: "mode",
          img: require(`~/assets/images/project-thumbnail-1.jpg`),
          slug: "/"
        },
        {
          order: 2,
          title: "It’s Not a Flower",
          description:
            "Graduation Collection - MA Textile, Swedish School of Textiles",
          category: "textile",
          img: require(`~/assets/images/project-thumbnail-2.jpg`),
          slug: "/"
        },
        {
          order: 3,
          title: "Floral Lines",
          description:
            "Graduation Collection 2014 - BA Fashion, Willem de Kooning Academie",
          category: "mode",
          img: require(`~/assets/images/project-thumbnail-3.jpg`),
          slug: "/"
        }
      ]
    };
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
@media (min-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, auto);
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
}
</style>
