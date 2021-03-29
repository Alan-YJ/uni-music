<template>
	<view class='hot-list-component'>
		<view class="header">
			<view class="title">热搜榜</view>
			<view class="btn">
				<radius-link :handler="playList">
					<text slot='text'>
						<text class="iconfont iconbofang1 iconfont-small"></text>
						播放
					</text>
				</radius-link>
			</view>
		</view>
		<view class="content">
			<view class="item" v-for='(item, index) in showList' :key='item.searchWord' @click='searchItem(item)' :class="{hot: index<3}">
				<text class="index" :class='{hot:index<3}'>{{index + 1}}</text> 
				<text class="word">{{item.searchWord}}</text>
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view v-show='!showMore'>
			<extend-more @click='toggleShow'>
				<template slot='text'>展开更多热搜</template>
			</extend-more>
		</view>
	</view>
</template>

<script>
	import RadiusLink from '@/components/RadiusLink.vue'
	import ExtendMore from '@/components/ExtendMore.vue'
	import { getHotSearchList, getHotDetailSearchList } from '@/apis/searchpage/index.js'
	export default {
		components:{
			RadiusLink,
			ExtendMore
		},
		data(){
			return{
				list:[],
				showMore:false,
			}
		},
		computed:{
			showList(){
				return this.showMore? this.list: this.list.slice(0, 10)
			}
		},
		mounted() {
			this.loadList()
		},
		methods:{
			loadList(){
				return getHotDetailSearchList().then(res=>{
					this.list = res.data
				})
			},
			playList(){
				console.info('play list ', this.list)
				this.$emit('playlist', this.list)
			},
			searchItem(item){
				this.$emit('search', item.searchWord)
			},
			toggleShow(){
				console.info('toggle click')
				this.showMore = true
			}
		}
	}
</script>

<style lang='scss'>
	.hot-list-component{
		.header{
			margin-top:20rpx;
			display: flex;
			justify-content: space-between;
			.title{
				font-weight: 700;
				font-size:36rpx;
				line-height:70rpx;
			}
			.btn{
				display: flex;
				align-items: center;
				.radius-btn{
					padding:10rpx 20rpx;
				}
			}
		}
		.content{
			display: grid;
			font-size:32rpx;
			line-height:90rpx;
			grid-template-columns: 50% 50%;
			grid-column-gap: 20rpx;
			max-width: 100%;
			.item{
				display: flex;
				&.hot{
					font-weight: 700;
				}
				&:active{
					background-color:#C0C0C0;
				}
				.index{
					margin-right:20rpx;
					&.hot{
						color: $primary-color;
					}
				}
				.word{
					margin-right:10rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					max-width: calc(100% - 2rem - 20rpx - 32rpx);
				}
				.icon{
					display: inline-block;
					image{
						width:2rem;
						height:32rpx;
					}
				}
			}
		}
	}
</style>