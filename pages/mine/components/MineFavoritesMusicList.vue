<template>
	<view class="favorites-music-list-component music-list">
		<view class="music-list-header">
			<text class="title">收藏歌单</text>
			<view class="icons"><text class="iconfont iconmore-"></text></view>
		</view>
		<view class="music-list-content">
			<music-list-item></music-list-item>
			<view class="null-tips">暂无收藏的歌单</view>
		</view>
	</view>
</template>

<script>
import MusicListItem from '@/components/RowMusicListItem.vue'
export default {
	components: {
		MusicListItem
	},
	data() {
		return {
			list: []
		};
	},
	methods: {
		importLocalMusic() {
			console.info('imort local music');
		}
	}
};
</script>

<style scoped lang="scss">
.favorites-music-list-component {
	background-color: white;
	border-radius: 40rpx;
	margin-top: 20rpx;
	.icons {
		.iconfont {
			margin-left: 20rpx;
			font-size: 32rpx;
		}
	}
	.null-tips {
		text-align: center;
	}
}
</style>
