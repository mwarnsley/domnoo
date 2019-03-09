import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

/**
 * Vue middleware for the global application components to use
 */
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(VueResource);

Vue.http.options.root = 'https://domnoo-1d6c1.firebaseio.com/';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app');
