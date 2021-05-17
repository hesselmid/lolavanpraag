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
    <div class="mt-[10px] font-light text-[14px] leading-[20px]">
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
      class="mt-[20px] grid gap-y-[40px] md:grid-cols-2 md:gap-x-[50px] xl:grid-cols-3"
    >
      <li v-for="article of filteredArticles" :key="article.slug">
        <NuxtLink :to="`/blog/${article.slug}`">
          <div>
            <img class="w-full" :src="article.img" />
            <div class="mt-[13px] flex justify-between">
              <div class="font-light text-[12px] leading-[17px]">
                {{ formatDate(article.createdAt) }}
                <div>{{ article.readingTime }} min read</div>
              </div>
              <div
                class="self-start py-[3px] px-[10px] border rounded-[13px] font-light text-[12px] leading-[17px] lowercase md:text-[14px] md:leading-[19px]"
                :class="{
                  'border-electric-pink': article.category === 'fashion',
                  'text-electric-pink': article.category === 'fashion',
                  'border-apple-green': article.category === 'textile',
                  'text-apple-green': article.category === 'textile'
                }"
              >
                {{ article.category }}
              </div>
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
      ],
      articleList: []
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
  computed: {
    filteredArticles() {
      this.articleList = [...this.articles];
      return this.articleList;
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    selectCategory(cat) {
      this.articleList = [...this.articles];
      console.log(this.articleList);
      this.articleList = this.articleList.filter(
        article => article.category === cat
      );
      console.log(this.articleList);
    }
  },
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  }
};
</script>
