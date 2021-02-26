
export const baseUrl = process.env.NODE_ENV === 'development'? "http://192.168.45.117:3000":"http://localhost:3000"

//GET Method
export function getData(url, params, fn){
	return new Promise((resolve, reject)=>{
		uni.request({
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

