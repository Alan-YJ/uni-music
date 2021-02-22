<template>
	<view class='video-item'>
		<image :src="item.picUrl" mode="widthFix" @click='playVideo'></image>
		<view class="title text-nowrap" @click='playVideo'>{{item.name}}</view>
		<view class="divider divider-horizontal"></view>
		<view class="artists-info">
			<view class="name">{{item.artistName}}</view>
			<view class='iconfont iconmore-'></view>
		</view>
	</view>
</template>

<script>
	import { getVideoUrl } from '@/apis/videopage/index.js'
	export default {
		props:{
			item:Object
		},
		data(){
			return{
				
			}
		},
		methods:{
			playVideo(){
				console.info(this.item.id)
				getVideoUrl(this.item.id).then(res=>{
					console.info('request success')
					uni.navigateTo({
						url: `/pages/video/play?id=${this.item.id}`
					})
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.video-item{
		background-color:white;
		padding:20rpx;
		margin-bottom:20rpx;
		image{
			width: 100%;
			border-radius: 20rpx;
		}
		.title{
			line-height:32px;
			font-weight:700;
			font-size:$uni-font-size-paragraph;
		}
		.artists-info{
			display: flex;
			justify-content: space-between;
			line-height:24px;
		}
	}
</style>