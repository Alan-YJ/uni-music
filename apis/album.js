import { getData, baseUrl } from '@/untils/request/index.js'

//歌单详情,但是没有歌曲名字等信息
export function getAlbumDetail(id, params, fn = ()=>{}){
	return getData(`/playlist/detail`,Object.assign({},params,{
		id:id
	}))
}

//歌曲详情
export function getAlbumSongs(ids, params, fn = ()=>{}){
	return getData(`/song/detail`,Object.assign({},params,{
		ids:ids
	}))
}