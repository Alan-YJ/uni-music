
import { baseUrl, getData } from '@/untils/request/index.js'

export function getHomeBanners(fn){
	return getData(`/banner`,null,fn)
}

export function getRecommendPlayList(fn){
	return getData(`/personalized`, null, fn)
}

export function getDragonBalls(fn){
	return getData(`/homepage/dragon/ball`, null, fn)
}