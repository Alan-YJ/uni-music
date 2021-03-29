
export const baseUrl = process.env.NODE_ENV === 'development'? "http://localhost:3000":"/api"
import store from '@/store/index.js'

//GET Method
export function getData(url, params, fn){
	return new Promise((resolve, reject)=>{
		uni.request({
			url: baseUrl + url,
			data: params,
			// header:{
			// 	token:store.state.userInfo.token
			// },
			success(res){
				resolve(res.data)
			},
			fail(err){
				reject(err)
			},
			complete(){
				fn ? fn() : null
			}
		})
	})
}

//POST Method
export function postData(url, params){
	return new Promise((resolve,reject)=>{
		uni.request({
			method:"POST",
			url: baseUrl + url,
			data: params,
			success(res){
				resolve(res.data)
			},
			fail(err){
				reject(err)
			},
			complete(){
				fn ? fn() : null
			}
		})
	})
}

