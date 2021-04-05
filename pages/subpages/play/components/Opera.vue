<template>
	<view class='operas'>
		<view class="play-type">
			<text class="iconfont iconxunhuanbofang"></text>
		</view>
		<view class="controls">
			<text class="iconfont icon48shangyishou"></text>
			<text class="control-center">
				<text class='iconfont iconzanting' style='text-indent:5rpx;' v-if='playState' @click='changeState(false)'></text>
				<text class="iconfont iconbofang4" style='text-indent:3rpx;' v-else @click='changeState(true)'></text>
			</text>
			<text class="iconfont icon49xiayishou"></text>
		</view>
		<view class="list">
			<text class="iconfont iconmulu"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			info:Object
		},
		computed:{
			playState(){
				return this.$store.state.playState
			}
		},
		methods:{
			changeState(state){
				this.$store.commit("changeState",state)
			}
		}
	}
</script>

<style scoped lang='scss'>
	.operas{
		display: flex;
		justify-content: space-between;
		align-items:center;
		padding:20rpx 40rpx;
		line-height:120rpx;
		align-items: center;
		line-height: initial;
		color:white;
		&>view{
			display: flex;
			align-items: center;
		}
		.iconfont{
			font-size:44rpx;
			height:44rpx;
			width:44rpx;
			line-height:44rpx;
			display: inline-block;
		}
		.control-center{
			padding:40rpx;
			border:1px solid white;
			border-radius: 50%;
			margin:0 40rpx;
		}
	}
</style>