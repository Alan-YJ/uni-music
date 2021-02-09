<template>
	<view class='video-page'>
		<view class="tabs-wrap">
			<view class='tab-header' :class='active == 1?"actived":""'>听听</view>
			<view class='tab-header' :class='active == 2?"actived":""'>推荐</view>
			<view class='tab-header' :class='active == 3?"actived":""'>分类</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:1
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'>
.tabs-wrap{
	padding:0 20%;
	display: flex;
	justify-content:space-around;
	color:gray;
	font-size:$uni-font-size-paragraph;
	.actived{
		background-image: $gradients-primary;
		background-size: 100% 10rpx;
	}
}
</style>
