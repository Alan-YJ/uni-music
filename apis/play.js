import { getData, baseUrl } from '@/untils/request/index.js'

//歌曲详情
export function getDetail(ids, params, fn = ()=>{}){
	return getData(`/song/detail`,Object.assign({},params,{
		ids:ids
	}))
}

//歌曲详情
export function getUrl(ids, params, fn = ()=>{}){
	return getData(`/song/url`,Object.assign({},params,{
		id:ids
	}))
}

