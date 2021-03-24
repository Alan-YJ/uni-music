

export function traceCount(count){
	return Number.parseInt(count) / 10**8 > 1 ? 
	(Number.parseInt(count) / 10**8).toFixed(1) + "亿" :
	Number.parseInt(count) / 10 ** 4 > 1 ? 
	(Number.parseInt(count) / 10 **4).toFixed(1) + "万":
	count
}

//写入localStorage
export function setStorage(key, data){
	uni.setStorageSync(key, typeof(data) === 'string'? data : JSON.stringify(data))
}

//读取localStorage
export function loadStorage(key){
	let result = window.loadStorage(key)
	if(result.indexOf('[')> -1 || result.indexOf('{') > -1){
		return JSON.parse(result)
	}else{
		return result
	}
}