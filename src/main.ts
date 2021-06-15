import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./common/stores";
import VueI18n from "vue-i18n";
import mixins from "@/common/mixins";
import { messages, defaultLocale } from "@/common/lang";
import "@/assets/scss/style.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.mixin(mixins);

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
