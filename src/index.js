import Vue from "vue";
import VeeValidate from "vee-validate";
import VueFormulate from "@braid/vue-formulate";

import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
Vue.use(VueFormGenerator);

import { store } from "./_store";
import { router } from "./_helpers";
import App from "./app/App";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(VueFormulate);
Vue.use(VeeValidate, {
  errorBagName: "vErrors",
});
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
