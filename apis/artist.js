import { getData, baseUrl } from '@/untils/request/index.js'

export function getArtistById(id, params, fn = ()=>{}){
	return getData(`/artist/detail`,Object.assign({},params,{
		id:id
	}))
}