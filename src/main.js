import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { store } from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Axios);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
