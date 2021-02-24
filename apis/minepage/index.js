import { getData, baseUrl } from '@/untils/request/index.js'

//获取推荐歌单
export function getRecommendMusicList(params = { page:1, limit:6 }, fn=()=>{}){
	return getData(`/personalized`, params, fn)
}