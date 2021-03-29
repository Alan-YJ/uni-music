<template>
	<view class="content">
		<search-component></search-component>
		<swiper class='banner-wrap' indicator-dots="true" autoplay="true" circular='true' duration="300"
		 indicator-active-color="#ff2419" :style="{height:swiperHeight+'px'}">
			<swiper-item v-for='swiper in bannerList' :item-id="swiper.index">
				<navigator :url='swiper.url'>
					<image class='swiper-image' :src="swiper.imageUrl" mode="widthFix"></image>
					<view class='title'>{{swiper.typeTitle}}</view>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- icon链接列表 -->
		<scroll-view scroll-x='true' enable-flex='true' class='icon-link-wrap'>
			<view class='icon-wrap'>
				<a :href='iconLink.url' class='icon-item icon-link' v-for='iconLink in iconLinkList'>
					<view class="icon">
						<image class='icon-link' :src='iconLink.iconUrl' mode='aspectFill'></image>
					</view>
					<view class='title'>{{iconLink.name}}</view>
				</a>
			</view>
		</scroll-view>
		<view class='play-list-wrap'>
			<view class='play-list-header'>
				<text class='play-list-title'>推荐歌单</text>
				<radius-link>
					<template #text>
						<text>更多</text>
						<text class="iconfont iconyoujiantou_huaban iconfont-small"></text>
					</template>
				</radius-link>
			</view>
			<scroll-view scroll-y="true" style='height:600rpx'>
				<!-- 推荐歌单列表 -->
				<!-- #ifdef MP-WEIXIN -->
				<recommend-play-list :list='recommendList'></recommend-play-list>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<play-list :list='recommendList'></play-list>
				<!-- #endif -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		getHomeBanners,
		getRecommendPlayList,
		getDragonBalls
	} from '@/apis/homepage/index.js'
	import {
		traceCount
	} from '@/untils/index'
	import SearchComponent from '@/components/Search.vue'
	import PlayList from '@/components/PlayListFunctional.vue'
	import RadiusLink from '@/components/RadiusLink.vue'
	import RecommendPlayList from './components/RecommendPlayList.vue'
	import SongListAlign from './components/SongListAlign.vue'
	export default {
		components: {
			RecommendPlayList,
			SongListAlign,
			PlayList,
			RadiusLink,
			SearchComponent
		},
		data() {
			return {
				bannerList: [],
				recommendList: [],
				iconLinkList: [],
				loading: false,
				swiperHeight: 0
			}
		},
		onLoad() {
			this.loading = true
			Promise.all([this.initBannerList(), this.getDragonBalls(), this.initPlayList()]).then(() => {
				this.loading = false
			})

		},
		methods: {
			async initBannerList() {
				await getHomeBanners().then(res => {
					this.bannerList = res.banners
					this.$nextTick(() => {
						this.checkImageLoad()
					})
				})
			},
			async getDragonBalls() {
				await getDragonBalls().then(res => {
					this.iconLinkList = res.data
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
		.icon-wrap{
			width: calc(7 * 160rpx);
		}
		.icon-item {
			width: 100rpx;
			padding: 30rpx;
			text-align: center;
			display: inline-block;
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
		a{	
			text-decoration: none;	
			color: inherit;
		}
	}
</style>
