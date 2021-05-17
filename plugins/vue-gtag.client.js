import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  const getGDPR = localStorage.getItem("GDPR:accepted");

  Vue.use(
    VueGtag,
    {
      config: { id: "UA-102074403-1" },
      bootstrap: getGDPR === "true"
      // enabled: getGDPR === "true",
      // appName: "lola",
      // pageTrackerScreenviewEnabled: true
    },
    app.router
  );
};
