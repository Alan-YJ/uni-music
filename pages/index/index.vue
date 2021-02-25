<template>
	<view class="content">
		<swiper class='banner-wrap' indicator-dots="true" autoplay="true" circular='true' duration="300"
		 indicator-active-color="#ff2419" :style="{height:swiperHeight+'px'}">
			<swiper-item v-for='swiper in bannerList' :item-id="swiper.index">
				<navigator :url='swiper.url'>
					<image class='swiper-image' :src="swiper.pic.replace('http:','https:')" mode="widthFix"></image>
					<view class='title'>{{swiper.typeTitle}}</view>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- icon链接列表 -->
		<scroll-view scroll-x='true' enable-flex='true' class='icon-link-wrap' style='display: flex;'>
			<view class='icon-item' v-for='iconLink in iconLinkList'>
				<view class="icon">
					<image class='icon-link' :src='iconLink.icon' mode='aspectFill'></image>
				</view>
				<view class='title'>{{iconLink.title}}</view>
			</view>
		</scroll-view>
		<view class='play-list-wrap'>
			<view class='play-list-header'>
				<text class='play-list-title'>推荐歌单</text>
				<radius-link>
					<template #text>
						更多>
					</template>
				</radius-link>
			</view>
			<scroll-view scroll-y="true" style='height:600rpx'>
				<!-- 推荐歌单列表 -->
				<!-- #ifdef MP-WEIXIN -->
				<recommend-play-list :list='recommendList'></recommend-play-list>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<plat-list :list='recommendList'></plat-list>
				<!-- #endif -->
			</scroll-view>
		</view>
		<!-- <song-list-align :data-source='songListData' v-if='songListData'></song-list-align> -->
	</view>
</template>

<script>
	import {
		getHomeBanners,
		getRecommendPlayList
	} from '@/apis/homepage/index.js'
	import {
		traceCount
	} from '@/untils/index'
	import PlatList from '@/components/PlayListFunctional.vue'
	import RadiusLink from '@/components/RadiusLink.vue'
	import RecommendPlayList from './components/RecommendPlayList.vue'
	import SongListAlign from './components/SongListAlign.vue'
	export default {
		components: {
			RecommendPlayList,
			SongListAlign,
			PlatList,
			RadiusLink
		},
		data() {
			return {
				bannerList: [],
				recommendList: [],
				iconLinkList: [{
						icon: "../../static/icon/icon-tj.png",
						title: "每日推荐",
						url: ""
					},
					{
						icon: "../../static/icon/icon-dt.png",
						title: "私人FM",
						url: ""
					},
					{
						icon: "../../static/icon/icon-gd.png",
						title: "歌单",
						url: ""
					},
					{
						icon: "../../static/icon/icon-rank.png",
						title: "排行榜",
						url: ""
					},
					{
						icon: "../../static/icon/icon-zb.png",
						title: "直播",
						url: ""
					},
					{
						icon: "../../static/icon/icon-zj.png",
						title: "数字专辑",
						url: ""
					},
					{
						icon: "../../static/icon/icon-fj.png",
						title: "歌房",
						url: ""
					},
				],
				songListData: [],
				loading: false,
				swiperHeight: 0
			}
		},
		onLoad() {
			this.loading = true
			Promise.all([this.initBannerList(), this.initPlayList()]).then(() => {
				this.loading = false
			})

		},
		methods: {
			async initBannerList() {
				await getHomeBanners().then(res => {
					this.bannerList = res.data.blocks[0].extInfo.banners
					this.songListData = res.data.blocks[2]
					this.$nextTick(() => {
						this.checkImageLoad()
					})
				})
			},
			checkImageLoad(){
				let dom = document.querySelector(".swiper-image img")
				if(dom&&dom.complete){
					this.initBannerHeight(".swiper-image img")
				}else{
					setTimeout(()=>{
						this.checkImageLoad()
					},300)
				}
			},
			async initPlayList() {
				await getRecommendPlayList().then(res => {
					this.recommendList = res.result.map(item => {
						return Object.assign(item, {
							playCount: traceCount(item.playCount)
						})
					})

				})
			},
			initBannerHeight(el) {
				setTimeout(() => {
					let query = uni.createSelectorQuery().in(this);
					query.select(el).boundingClientRect().exec((res) => {
						if (!res) {
							this.initBannerHeight(el)
						} else {
							if (res[0] && res[0].height > 0) {
								this.swiperHeight = res[0].height
							} else {
								this.initBannerHeight(el)
							}
						}
					})
				}, 100)
			}
		}
	}
</script>

<style lang='scss'>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left:10rpx;
		padding-right:10rpx;
	}

	.banner-wrap {
		width: 100%;

		image {
			width: 100%;
		}

		swiper-item {
			position: relative;
			border-radius: 20rpx;

			.title {
				position: absolute;
				bottom: 0;
				right: 0;
				font-size: 25rpx;
				background-color: $primary-color;
				padding: 5rpx 10rpx;
				color: white;
				border-top-left-radius: 20rpx;
			}
		}
	}

	.icon-link-wrap {
		padding: 10rpx;
		width: 100%;
		height: 200rpx;
		display: flex;
		border-bottom: 1rpx solid #dedede;

		.icon-item {
			width: 100rpx;
			padding: 30rpx;
			text-align: center;

			.icon {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				background-color: $primary-color;
				vertical-align: middle;
				display: flex;
				align-items: center;
				flex-direction: row;
				text-align: center;
				justify-content: center;
			}

			image {
				width: 60rpx;
				height: 60rpx;
			}

			.title {
				font-size: $uni-font-size-sm;
				margin-top: 10rpx;
				white-space: nowrap;
			}
		}
	}
</style>
