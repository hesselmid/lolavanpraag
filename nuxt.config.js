export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
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
      { rel: "stylesheet", href: "https://use.typekit.net/hrx0dfu.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["node_modules/lite-youtube-embed/src/lite-yt-embed.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/youtube.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
