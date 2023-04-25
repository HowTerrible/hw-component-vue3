import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import '@hw/theme-chalk/src/index.scss';

import Icon from '@hw/components/icon';
import Button from '@hw/components/button';
const plugins = [Icon, Button];

plugins.forEach(plugin => app.use(plugin));

app.mount('#app');
