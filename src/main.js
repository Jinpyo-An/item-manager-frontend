import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faPen,
	faRightFromBracket,
	faCalendarDays,
	faHouse,
	faUser,
	faShareNodes,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'; // 필요한 아이콘 import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
	faRightFromBracket,
	faPen,
	faCalendarDays,
	faHouse,
	faUser,
	faShareNodes,
	faMagnifyingGlass,
);

const app = createApp(App);

// FontAwesome 컴포넌트 전역 등록
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
