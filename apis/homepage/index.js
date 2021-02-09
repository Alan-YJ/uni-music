
import { baseUrl, getData } from '@/untils/request/index.js'

export function getHomeBanners(fn){
	return getData(`/homepage/block/page`,null,fn)
}

export function getRecommendPlayList(fn){
	return getData(`/personalized`, null, fn)
}