<template>
  <div
    class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] md:pt-[165px] md:pb-[228px] 2xl:px-[55px]"
  >
    <SocialHead
      :title="article.title"
      :description="article.description"
      :image="article.img"
    />
    <Breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <article>
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:text-[90px] md:leading-[90px]"
      >
        {{ article.title }}
      </h1>
      <img :src="article.img" :alt="article.alt" />
      <nuxt-content class="max-w-[640px]" :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.article.title} | lolavanpraag.com`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        }
      ]
    };
  },
  computed: {
    breadcrumbs() {
      return [
        { name: "Home", link: "/" },
        { name: "News", link: "/blog" },
        { name: this.article.title, link: this.article.slug }
      ];
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
};
</script>

<style>
.nuxt-content p {
  margin-top: 10px;
  font-weight: 300;
  line-height: 22px;
}

@media (min-width: 1024px) {
  .nuxt-content p {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
