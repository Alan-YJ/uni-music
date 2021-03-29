import PlatformType from './type.js'

export function ifDefPlatform() {
	let platform

	//#ifdef APP-PLUS
	platform = EPlatform.AppPlus
	//#endif

	//#ifdef APP-PLUS-NVUE
	platform = EPlatform.AppPlusNvue
	//#endif

	//#ifdef H5
	platform = EPlatform.H5
	//#endif

	//#ifdef MP-WEIXIN
	platform = EPlatform.MpWeixin
	//#endif

	//#ifdef MP-ALIPAY
	platform = EPlatform.MpAlipay
	//#endif

	//#ifdef MP-BAIDU
	platform = EPlatform.MpBaidu
	//#endif

	//#ifdef MP-TOUTIAO
	platform = EPlatform.MpToutiao
	//#endif

	//#ifdef MP-QQ
	platform = EPlatform.MpQq
	//#endif

	//#ifdef MP-360
	platform = EPlatform.Mp360
	//#endif

	//#ifdef MP
	platform = EPlatform.Mp
	//#endif

	//#ifdef quickapp-webview
	platform = EPlatform.QuickappWebview
	//#endif

	//#ifdef quickapp-webview-union
	platform = EPlatform.QuickappWebviewUnion
	//#endif

	//#ifdef quickapp-webview-huawei
	platform = EPlatform.QuickappWebviewHuawei
	//#endif

	return platform
}