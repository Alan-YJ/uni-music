import { getData, baseUrl } from '@/untils/request/index.js'

//获取推荐播单
export function getRecommendRadio(params = { page:1, limit:6 }, fn=()=>{}){
	return getData(`/personalized/djprogram`, params, fn)
}