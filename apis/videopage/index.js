import { getData, baseUrl } from '@/untils/request/index.js'

//获取推荐mv
export function getRecommendMv(params = { page:1, limit:20 }, fn=()=>{}){
	return getData(`/personalized/mv`, params, fn)
}

//获取视频播放地址
export function getVideoUrl(id, params, fn = ()=>{}){
	return getData(`/mv/url`,Object.assign({},params,{
		id:id
	}),fn)
}