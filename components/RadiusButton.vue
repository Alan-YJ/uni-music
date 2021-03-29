<template>
	<view class='radius-btn' @click='$emit("click")'>
		<slot name='text'>
			{{text}}
		</slot>
	</view>
</template>

<script>
	export default {
		props:{
			text:String
		}
	}
</script>

<style scoped lang='scss'>
	.radius-btn{
		background-color: $primary-color;
		line-height:36rpx;
		border-radius: 36rpx;
		color:white;
		text-align:center;
		font-size:36rpx;
		padding:20rpx 0;
		display: flex;
		align-items: center;
		&:active{
			background-color: #d42118;
		}
	}
</style>