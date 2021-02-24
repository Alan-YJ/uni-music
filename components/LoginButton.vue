<template>
	<view class='login-btn'>
		<view class="iconfont icontouxiang login-icon"></view>
		<text>立即登录</text>
		<text>></text>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang='scss' scoped>
	.login-btn{
		display: flex;
		line-height:120rpx;
		&>*{
			margin-right:20rpx;
		}
		.login-icon{
			font-size:80rpx;
			color:#d2a1aa;
			margin-left:20rpx;
		}
		text{
			font-size:28rpx;
			font-weight:700;
		}
	}
</style>