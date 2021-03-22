<template>
	<view @click='emitClick'>
		<slot name='text'>展开查看更多信息</slot>
		<text class='iconfont iconxialajiantouxiao'></text>
	</view>
</template>
<script>
	export default{
		methods:{
			emitClick(){
				this.$emit('click')
			}
		}
	}
</script>
<style scoped lang='scss'>
	view{
		text-align:center;
		line-height:60rpx;
		font-size:24rpx;
		color:gray;
		&:active{
			background-color:#C0C0C0;
		}
		.iconfont{
			margin-left:15rpx;
			font-size:24rpx;
		}
	}
</style>