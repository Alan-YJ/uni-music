<template>
	<view class='radius-btn' @click='handler()'>
		{{text}}
		<slot name='text'></slot>
	</view>
</template>

<script>
	export default {
		props:{
			text:String,
			handler: Function
		}
	}
</script>

<style scoped>
	.radius-btn{
		padding:7rpx 14rpx 5rpx 16rpx;
		border:1px solid rgba(200,200,200,.5);
		border-radius: 30rpx;
		display: inline-block;
		box-shadow: 1rpx 1rpx #999999;
	}
</style>