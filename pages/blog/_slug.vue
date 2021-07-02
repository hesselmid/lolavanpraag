<template>
  <div
    class="container mx-auto pt-[86px] px-[17.5px] md:px-[30px] md:pt-[165px] 2xl:px-[55px]"
  >
    <meta-tags
      :title="article.title"
      :description="article.description"
      :image="article.img"
    />
    <breadcrumbs :breadcrumbs="breadcrumbs" color="#A3A3A3" />
    <article>
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] md:text-[90px] md:leading-[90px]"
      >
        {{ article.title }}
      </h1>
      <div class="mt-[20px] font-light leading-[22px]">
        {{ formatDate(article.createdAt) }}
      </div>
      <nuxt-content
        class="mt-[10px] max-w-[640px] md:mt-[20px]"
        :document="article"
      />
    </article>
    <follow-me class="my-[100px] 2xl:mt-[194px] 2xl:mb-[110px]" />
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return [
        { name: "Home", link: "/" },
        { name: "News", link: "/blog" },
        { name: this.article.title, link: this.article.slug }
      ];
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
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

.nuxt-content a {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .nuxt-content p {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
