import './assets/styles/main.scss'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useTheme } from './themeProvider';

const app = createApp(App);

const { setTheme } = useTheme();
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

app.use(router);
app.mount('#app');