<template functional>
	<view class='play-count-component' :class='props.class'>
		<text class="iconfont iconicon-play"></text>
		<text class='value'>{{props.value}}</text>
	</view>
</template>

<style scoped lang='scss'>
	.play-count-component{
		height:32rpx;
		line-height:32rpx;
		padding:4rpx 16rpx;
		background-color:rgba(150,150,150,.4);
		display: inline-block;
		border-radius: 32rpx;
		color:white;
		zoom:0.8;
		font-size:18rpx;
		.iconfont{
			font-size:18rpx;
		}
	}
</style>