import Vue from 'vue';

import './bootstrap';
import App from './App.vue';
import { router } from './router.js';

new Vue({
	el: '#app',
	template: '<app></app>',
	components: { App },
	router 
});
