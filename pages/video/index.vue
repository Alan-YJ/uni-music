<template>
	<view class='video-page'>
		<view class="tabs-wrap">
			<view class='tabs'>
				<view class='tab-header' :class='active == 1?"actived":""'>听听</view>
				<view class='tab-header' :class='active == 2?"actived":""'>推荐</view>
				<view class='tab-header' :class='active == 3?"actived":""'>分类</view>
			</view>
			<view class="active-bar"></view>
		</view>
		<view class="tab-content">
			
			<recommend-video v-if='active==2'></recommend-video>
		</view>
	</view>
</template>

<script>
	import RecommendVideo from './video.vue'
	export default {
		components:{
			RecommendVideo
		},
		data() {
			return {
				active:2
			}
		},
		mounted(){ 
			let activeDom = document.querySelector('.tab-header.actived')
			let activeBarDom = document.querySelector(".active-bar")
			if(activeDom){
				let left = activeDom.offsetLeft
				let width = activeDom.offsetWidth
				activeBarDom.style.width = width+"px"
				activeBarDom.style.left = left-5+"px"
				activeBarDom.style.display = 'block';
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'>
.tabs-wrap{
	padding:0 20%;
	font-size:$uni-font-size-lg;
	padding-top:20rpx;
	line-height:60rpx;
	position: relative;
	background-color: white;
	margin-bottom:1rpx;
	.tabs{
		display: flex;
		justify-content:space-around;
		color:gray;
	}
	.actived{
		z-index: 1;
		font-weight: 700;
		color:darken($color: #666, $amount: 0)
	}
	.active-bar{
		position:absolute;
		z-index: 0;
		left:0;
		bottom:15rpx;
		background-color: $primary-color;
		border-radius: 15rpx;
		display: none;
		width: 80rpx;
		height:15rpx;
		padding:0 10rpx;
	}
}
</style>
