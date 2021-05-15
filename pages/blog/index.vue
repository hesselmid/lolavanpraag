<template>
  <div
    class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] md:pt-[165px] md:pb-[228px] 2xl:px-[55px]"
  >
    <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <h1
      class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:text-[90px] md:leading-[90px]"
    >
      News
    </h1>
    <ul class="mt-[20px] grid gap-y-[40px] md:grid-cols-2 xl:grid-cols-3">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="`/blog/${article.slug}`">
          <div>
            <img :src="article.img" />
            <div class="mt-[13px] font-light text-[12px] leading-[17px]">
              {{ formatDate(article.createdAt) }}
            </div>
            <h2 class="mt-[10px] font-light text-[22px] leading-[31px]">
              {{ article.title }}
            </h2>
            <p class="mt-[7px] font-light text-[14px] leading-[19px]">
              {{ article.description }}
            </p>
            <BaseLink
              class="mt-[15px] ml-[20px]"
              black="true"
              :link="`/blog/${article.slug}`"
              >read more</BaseLink
            >
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "News", link: "/blog" }
      ]
    };
  },
  head() {
    return {
      title: "Blog | lolavanpraag.com",
      meta: [
        {
          hid: "description",
          name: "description",
          content: ""
        }
      ]
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "slug", "createdAt"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  }
};
</script>
