import Vue from 'vue';
import App from './App.vue';

import { MdButton, MdDrawer } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

/**
 * Vue middleware for the global application components to use
 */
Vue.use(MdButton);
Vue.use(MdDrawer);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app');
