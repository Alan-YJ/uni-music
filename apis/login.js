import { getData, baseUrl } from '@/untils/request/index.js'

//手机登录
export function loginByPhone(params, fn = ()=>{}){
	return getData(`/login/cellphone`,Object.assign({},params))
}