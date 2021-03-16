import { getData, baseUrl } from '@/untils/request/index.js'

//获取默认关键词
export function getDefaultKeyword(fn=()=>{}){
	return getData(`/search/default`,{} , fn)
}

//获取热门搜索
export function getHotSearchList(fn=()=>{}){
	return getData(`/search/hot`, {}, fn)
}

//获取热门详细搜索
export function getHotDetailSearchList(fn=()=>{}){
	return getData(`/search/hot/detail`, {}, fn)
}

//搜索
export function searchKeyword(keyword, params, fn=()=>{}){
	return getData(`/search/suggest`, params, fn)
}

