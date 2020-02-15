// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import './assets/assets/css/public.css'
// import './assets/bower_components/smooth-scroll/dist/js/smooth-scroll.min.js'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(VueI18n) ;

const i18n = new VueI18n({
    locale: 'zh',    // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale 
    messages: {
      'zh': require('./common/lang/zh'),   // 中文语言包
      'en': require('./common/lang/en'),   // 英文语言包, 
      'ko': require('./common/lang/ko')    // 韩语语言包
    }
})

import { Select, Option } from 'element-ui';

Vue.use(Select);
Vue.use(Option);
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
