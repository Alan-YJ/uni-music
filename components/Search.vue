<template>
	<view class='search-component'>
		<view class='search-wrap'>
			<view>
				<text class='iconfont iconmulu'></text>
			</view>
			<view class="top-search flex-box">
				<text class='iconfont iconsousuo1'></text>
				<input type="text" v-model='content' @click='gotoSearch'>
			</view>
		</view>
		<view>
			<text class='iconfont iconyuyin1'></text>
		</view>
	</view>
</template>

<script>
	import StatusBar from './uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			'uni-status-bar':StatusBar
		},
		data(){
			return{
				content:undefined
			}
		},
		methods:{
			gotoSearch(){
				console.info('goto search')
				uni.navigateTo({
					url:"/pages/subpages/search/index"
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.search-component{
		height:80rpx;
		width:100%;
		line-height:80rpx;
		display: flex;
		justify-content: space-between;
		.iconfont{
			font-size:50rpx;
		}
		.search-wrap{
			flex:1;
			display: flex;
			.top-search{
				flex:1;
				padding:12rpx 16rpx;
				border-radius: 70rpx;
				position:relative;
				.iconfont{
					position:absolute;
					font-size:36rpx;
					left:30rpx;
					top:0rpx;
				}
				input{
					background-color:white;
					box-shadow: .2rpx .2rpx .2rpx #dedede;
					height:100%;
					border-radius: 48rpx;
					text-indent: 1.7em;
				}
			}
		}
	}
</style>