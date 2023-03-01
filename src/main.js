import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss';

import { currency, date } from './composable/filter';

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$filter = {
  currency,date
};
pinia.use(piniaPluginPersistedstate);

app.use(pinia)
app.use(router)
app.use(VueAxios, axios)
app.component('Loading', Loading)
app.mount('#app')
