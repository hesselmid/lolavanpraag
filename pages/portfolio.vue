<template>
  <div
    class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] 2xl:px-[55px]"
  >
    <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <h1 class="mt-[20px] font-serif font-light text-[32px] leading-[32px]">
      Portfolio
    </h1>
    <ul class="mt-[20px]">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :title="project.title"
        :description="project.description"
        :category="project.category"
        :img="project.img"
        :slug="project.slug"
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
          title: "No Unlocals",
          description:
            "Graduation Collection 2019 – MA Menswear, Westminster University",
          category: "mode",
          img: require(`~/assets/images/project-thumbnail-1.jpg`),
          slug: "/"
        },
        {
          title: "It’s Not a Flower",
          description:
            "Graduation Collection - MA Textile, Swedish School of Textiles",
          category: "textile",
          img: require(`~/assets/images/project-thumbnail-2.jpg`),
          slug: "/"
        },
        {
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
