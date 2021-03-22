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

<style scoped lang='scss'>
	.radius-btn{
		padding:5rpx 20rpx;
		position: relative;
		vertical-align: middle;
		&:active{
			background-color:rgba(200,200,200,.5);
		}
		&::after{
			position: absolute;
			left:0;
			top:0;
			width:200%;
			height:200%;
			transform: scale(.5);
			border:1px solid rgba(200,200,200,1);
			border-radius: 80rpx;
			transform-origin: left top;
			content:"";
		}
	}
</style>