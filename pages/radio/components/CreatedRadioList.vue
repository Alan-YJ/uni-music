<template>
	<div class='music-list'>
		<view class="music-list-header">
			<text class="title">创建播单({{list.length}})</text>
			<view class="icons">
				<text class="iconfont iconmore-"></text>
			</view>
		</view>
		<view class="music-list-content">
			<music-list-item></music-list-item>
			<view class="create-music-list" @click='createRadioList'>
				<view class="cover">
					<view class="iconfont iconadd"></view>
				</view>
				<view class="title">创建新的播单</view>
			</view>
		</view>
	</div>
</template>

<script>
	import MusicListItem from '@/components/RowMusicListItem.vue'
	export default {
		components:{
			MusicListItem
		},
		data(){
			return{
				list:[]
			}
		},
		methods:{
			createRadioList(){
				console.info('create radio list')
			}
		}
	}
</script>

<style scoped lang='scss'>
	.create-music-list {
		display: flex;
		align-items: center;
		margin-top:20rpx;
		.cover {
			width: 90rpx;
			height: 90rpx;
			background-color: #ccc;
			border-radius: 20rpx;
			.iconfont {
				color: #555;
				font-size:60rpx;
				text-align: center;
				line-height:90rpx;
			}
		}
		.title {
			line-height: 90rpx;
			margin-left: 20rpx;
			font-size: 28rpx;
		}
	}
</style>