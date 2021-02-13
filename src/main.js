import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import infiniteScroll from 'vue-infinite-scroll';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(infiniteScroll);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
