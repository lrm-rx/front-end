
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import str from './hello.js'
import './assets/common.css'
import logo from './assets/logo.png'

let img = document.querySelector('img');
img.src = logo;

console.log( str + ' world!!!!!' );