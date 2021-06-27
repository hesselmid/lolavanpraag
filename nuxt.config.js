export default {
  target: "static",

  head: {
    title: "Lola van Praag - Menswear, Textile Design | lolavanpraag.com",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Lola van Praag is a Menswear Fashion Designer and Textile Artist based in the Netherlands."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "preconnect",
        href: "https://use.typekit.net",
        crossorigin: "anonymous"
      },
      {
        rel: "preload",
        as: "style",
        href: "https://use.typekit.net/hrx0dfu.css"
      },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/hrx0dfu.css",
        media: "print",
        onload: "this.media='all'"
      }
    ]
  },

  css: ["node_modules/lite-youtube-embed/src/lite-yt-embed.css"],

  plugins: [
    "~/plugins/youtube.client.js",
    "~/plugins/vue-observe-visibility.client.js",
    "~/plugins/vue-gtag.client.js"
  ],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxt/content"],

  build: {}
};
