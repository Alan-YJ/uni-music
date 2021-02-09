import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import PubFunc from './common/js/utils.js'
Vue.prototype.$PubFunc = PubFunc 

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
