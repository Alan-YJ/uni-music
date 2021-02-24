<template>
	<view class="like-music-list-component">
		<view class="icon-wrap"><view class="iconfont iconLikexihuan"></view></view>
		<view class="title">
			<view class="name">我喜欢的音乐</view>
			<view class="count">{{ list.length }}首</view>
		</view>
		<view class="heart-btn">
			<text class="iconfont iconxindong"></text>
			<text>心动模式</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: []
		};
	}
};
</script>

<style scoped lang="scss">
.like-music-list-component {
	background-color: white;
	border-radius: 40rpx;
	padding: 40rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 90rpx;
	.icon-wrap {
		background-color: gray;
		width: 90rpx;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 20rpx;
		text-align: center;
		vertical-align: middle;
		align-items: center;
		align-content: center;
		align-self: center;
		.iconfont {
			font-size: 40rpx;
			color: white;
		}
	}
	.title {
		flex: 1;
		margin-left: 20rpx;
		.name {
			line-height: 40rpx;
		}
		.count {
			font-size:20rpx;
			color:gray;
		}
	}
	.heart-btn {
		border:1px solid #ccc;
		border-radius: 24rpx;
		padding:6rpx 18rpx;
	}
}
</style>
