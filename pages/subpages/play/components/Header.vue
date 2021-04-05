<template>
	<view class='play-header'>
		<text class="iconfont iconfanhuijiantou"></text>
		<view class="title-wrap">
			<view class="title">{{info.name}}</view>
			<view class="artist">{{info.ar.map(a=>{return a.name}).join("/")}}</view>
		</view>
		<text class="iconfont iconfenxiang1"></text>
	</view>
</template>

<script>
	export default {
		props:{
			info:Object
		}
	}
</script>

<style scoped lang='scss'>
	.play-header{
		display: flex;
		justify-content: space-between;
		color:white;
	}
	.title-wrap{
		text-align: center;
		.title{
			font-size:24rpx;
			line-height:48rpx;
		}
		.artist{
			font-size:18rpx;
		}
	}
</style>