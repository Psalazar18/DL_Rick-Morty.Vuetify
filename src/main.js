import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig";
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
