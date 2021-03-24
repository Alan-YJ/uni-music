import Vuex from 'vuex'
import Vue from 'vue'
import { getData, postData } from '@/untils/request/index.js'

Vue.use(Vuex)

const state  = {
	userInfo:{
		hasLogin:false,
		token:undefined,
		profile:undefined
	}
}

const mutations = {
	storeLogin(state, payload){
		const tempData = {
			hasLogin:true,
			token:payload.token,
			profile:payload.profile
		}
		
		state.userInfo = Object.assign({}, state.userInfo, tempData)
		
	},
	initLoginInfo(state){
		const token = uni.getStorageSync('token')
		const profile = uni.getStorageSync('profile')
		state.userInfo = {
			hasLogin: true,
			token: token,
			profile: profile
		}
	}
	
}

const actions = {
	refreshLogin(){
		return getData(`/login/refresh`)
	},
	checkLogin(){
		return getData(`/login/status`)
	}
}

const getters = {
	
}

export default new Vuex.Store({
	state, mutations, actions, getters
})