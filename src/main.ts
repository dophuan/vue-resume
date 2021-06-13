import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./common/store";
import VueI18n from "vue-i18n";
import { messages, defaultLocale } from "@/common/language";
import "@/assets/scss/style.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
