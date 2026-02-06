import { createApp } from 'vue'
import '@/assets/font/css2.css'
import './style.css'
import 'normalize.css';
import router from './route/index.js'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(router).use(Antd).use(ElementPlus).mount('#app')
