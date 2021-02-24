<template>
	<view class="recommend-music-list-component">
		<view class="header">
			<view class="title">为你推荐</view>
			<view class="icon" @click='closeRecommend'>
				<text class="iconfont iconguanbijiantou"></text>
			</view>
		</view>
		<view class="content">
			<grid-music-list-item v-for='item in list' :key='item.id' :item='item' @click='openMusicList(item)'></grid-music-list-item>
		</view>
		<view class="footer">
			<radius-link text='更多推荐歌单 >' :handler="gotoRecommendMusicList"></radius-link>
		</view>
	</view>
</template>

<script>
	import { getRecommendMusicList } from '@/apis/minepage/index.js'
	import RadiusLink from '@/components/RadiusLink.vue'
	import GridMusicListItem from '@/components/GridMusicListItem.vue'
	export default {
		components:{
			RadiusLink,
			GridMusicListItem
		},
		data(){
			return{
				list:[],
				pagination:{
					page:1,
					limit:6
				}
			}
		},
		mounted(){
			this.loadList()
		},
		methods:{
			loadList(){
				return getRecommendMusicList(this.pagination).then(res=>{
					this.list = res.result
				})
			},
			openMusicList(item){
				console.info("open music list by id",item.id)
			},
			closeRecommend(){
				console.info('close show recommend music list')
			},
			gotoRecommendMusicList(){
				console.info('goto recommend music list')
			}
		}
	};
</script>

<style scoped lang='scss'>
.recommend-music-list-component {
	.header{
		display: flex;
		justify-content: space-between;
		font-size:32rpx;
		font-weight: 700;
		margin-bottom:20rpx;
		.icon{
			width:50rpx;
			height:50rpx;
			border-radius: 50%;
			text-align: center;
			line-height:50rpx;
			background-color:#ddd;
		}
	}
	.content{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 20rpx;
		grid-row-gap: 20rpx;
	}
	.footer{
		margin-top:20rpx;
		text-align: center;
	}
}
</style>
