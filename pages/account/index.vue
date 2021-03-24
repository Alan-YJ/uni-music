<template>
	<view class='account-page'>
		<view class="header">
			<view class="icons">
				<view>
					<!-- #ifdef H5 APP-NVUE APP-PLUS -->
					<view class="iconfont iconsaoma" @click='openScan'></view>
					<!-- #endif -->
				</view>
				<view class="title">{{title}}</view>
				<view class="iconfont iconzhuzhuang"></view>
			</view>
		</view>
		<scroll-view v-if='!hasLogin' scroll-y="true" class='page-content' @scroll="scroll" :scroll-top='scrollTop'>
			<view class='login-tips'>
				<view>登录云音乐</view>
				<view>手机电脑多端同步，尽享海量高品质音乐</view>
				<button class='login-btn' @click='login'>立即登录</button>
			</view>
			<tools-component></tools-component>
		</scroll-view>
		<view class="user-info" v-else>
			<view class="avatar-wrap">
				<view class="avatar"></view>
				<view class="nick-name-wrap">
					<view class="nick-name"></view>
					<view class="level"></view>
				</view>
			</view>
			<view class="sign">
				
			</view>
		</view>
		<view class="data-list">
			<view class="dynamic info-item"></view>
			<view class="follow info-item"></view>
			<view class="fans info-item"></view>
			<view class="edit info-item"></view>
		</view>
		<!-- #ifdef H5 -->
		<scan ref='scan' @success='getScanCode'></scan>
		<!-- #endif -->
	</view>
</template>

<script>
	import Scan from '@/components/Scan.vue'
	import ToolsComponent from './components/ToolsComponent.vue'
	export default {
		components:{
			Scan,
			ToolsComponent
		},
		data() {
			return {
				scrollTop:0,
				title:"",
				isShowScan:false,
			}
		},
		computed:{
			hasLogin(){
				return this.$store.state.userInfo.hasLogin
			}
		},
		methods: {
			scroll(e){
				let scrollTop = e.detail.scrollTop
				if(screenTop < 5){
					this.title = ''
					this.scrollTop = 0
				}else{
					this.title = '账号'
				}
			},
			openScan(){
				this.$refs.scan.open()
				this.isShowScan = true
				uni.hideTabBar({})
			},
			closeScan(){
				this.$refs.scan.close()
				this.isShowScan = false
				uni.showTabBar()
			},
			getScanCode(val){
				this.closeScan()
				uni.showToast({
					icon:'none',
					title:'扫码成功'
				})
			},
			login(){
				uni.navigateTo({
					url:"/pages/subpages/login/login"
				})
			}
		}
	}
</script>

<style lang='scss'>
	.account-page{
		padding:20rpx;
		.header{
			position:fixed;
			top:20rpx;
			width:calc(100% - 40rpx);
			left:0;
			right:0;
			padding:0 20rpx;
			.icons{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.iconfont{
					font-size:48rpx;
				}
			}
			.title{
				font-size:48rpx;
				font-weight: 700;
			}
		}
		.login-tips{
			margin-top:120rpx;
			width:100%;
			text-align: center;
			font-size:32rpx;
			line-height:60rpx;
			.login-btn{
				margin-top:20rpx;
				border-radius: 90rpx;
				width:100%;
				&::after{
					border-radius: 90rpx;
				}
			}
		}
	}
</style>
