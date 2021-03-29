<template>
	<view class="recommend-music-list-component">
		<view class="header">
			<view class="title">为你推荐</view>
			<view class="icon" @click='closeRecommend'>
				<text class="iconfont iconguanbijiantou iconfont-small"></text>
			</view>
		</view>
		<view class="content">
			<grid-music-list-item :showCount='showCount' v-for='item in list' :key='item.id' :item='item' @click='openItemHandler(item)'></grid-music-list-item>
		</view>
		<view class="footer" v-if='footerBtn||footerBtnText'>
			<radius-link :handler="footerBtnHandler">
				<template slot='text'>
					<text style='margin-right:10rpx;'>{{footerBtnText}}</text>
					<text class="iconfont iconjinrujiantou1 iconfont-small"></text>
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
			text-align: center;
			.iconfont{				
				border-radius: 50%;
				background-color:#ddd;
				padding:10rpx;
			}
			&:active{
				.iconfont{
					background-color:rgba(220,220,220,.5);
					color:red;
				}
			}
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
		.radius-btn{
			padding:10rpx 20rpx;
		}
	}
}
</style>
