// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueCookie from 'vue-cookie';

import 'jcloud-ele-ui/lib/theme-jcloud/base.css';
import 'jcloud-ele-ui/lib/theme-jcloud/reset.css';

Vue.config.productionTip = false;
Vue.use(VueCookie);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
