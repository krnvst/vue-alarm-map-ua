import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import InlineSvg from 'vue-inline-svg';


const app = createApp(App);
app.use(VueAxios, axios);
app.component('inline-svg', InlineSvg);
app.mount('#app');