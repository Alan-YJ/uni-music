<template>
	<view class="recommend-music-list-component">
		<view class="header">
			<view class="title">为你推荐</view>
			<view class="icon" @click='closeRecommend'>
				<text class="iconfont iconguanbijiantou"></text>
			</view>
		</view>
		<view class="content">
			<grid-music-list-item :showCount='showCount' v-for='item in list' :key='item.id' :item='item' @click='openItemHandler(item)'></grid-music-list-item>
		</view>
		<view class="footer" v-if='footerBtn||footerBtnText'>
			<radius-link :handler="footerBtnHandler">
				<template slot='text'>
					{{footerBtnText}}
					<text class="iconfont iconjinrujiantou1"></text>
				</template>
			</radius-link>
		</view>
	</view>
</template>

<script>
	import RadiusLink from '@/components/RadiusLink.vue'
	import GridMusicListItem from '@/components/GridMusicListItem.vue'
	export default {
		components:{
			RadiusLink,
			GridMusicListItem
		},
		props:{
			footerBtn:Boolean,
			footerBtnText:{
				type:String
			},
			footerBtnHandler:Function,
			openItemHandler:Function,
			showCount:{
				type: Boolean,
				default: true
			},
			list:Array
		},
		data(){
			return{
			}
		},
		methods:{
			closeRecommend(){
				console.info('close show recommend music list')
			},
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
