<template>
	<view class="created-music-list-component music-list">
		<view class="music-list-header">
			<text class="title">创建歌单</text>
			<view class="icons">
				<text class="iconfont iconanonymous-iconfont"></text>
				<text class="iconfont iconmore-"></text>
			</view>
		</view>
		<view class="music-list-content">
			<music-list-item></music-list-item>
			<view class="import-music" @click='importLocalMusic'>
				<view class="cover"><view class="iconfont iconbendiyinyue36"></view></view>
				<view class="title">一键导入本地音乐</view>
			</view>
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
	methods:{
		importLocalMusic(){
			console.info('imort local music')
		}
	}
};
</script>

<style scoped lang="scss">
.created-music-list-component {
	background-color: white;
	border-radius: 40rpx;
	margin-top: 20rpx;
	.import-music {
		display: flex;
		align-items: center;
		margin-top:20rpx;
		.title {
			line-height: 90rpx;
			margin-left: 20rpx;
			font-size: 28rpx;
		}
	}
}
</style>
