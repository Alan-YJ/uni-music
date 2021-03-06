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

//获取视频详情
export function getVideoDetail(id, params, fn=()=>{}){
	return getData(`/mv/detail`, Object.assign({},params,{
		mvid:id
	}),fn)
}

//获取MV点赞、转发信息
export function getVideoInfo(id, params, fn=()=>{}){
	return getData(`/mv/detail/info`, Object.assign({},params,{
		mvid:id
	}),fn)
}