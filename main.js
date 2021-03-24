import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.config.productionTip = false

import PubFunc from './common/js/utils.js'
Vue.prototype.$PubFunc = PubFunc 

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
