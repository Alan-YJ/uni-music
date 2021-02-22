<template>
	<view class="video-play-page">
		<view class="header">
			<view class="iconfont iconchangyongicon-1" @click="goBack"></view>
			<view class="mv-tag">MV</view>
			<view class="opera-ext">
				<view class="iconfont"></view>
				<view class="iconfont iconmore-"></view>
			</view>
		</view>
		<view class="vedio-content">
			<video
				:src="url"
				ref="videoRef"
				id="videoId"
				:controls="false"
				:autoplay="autoplay"
				:loop="true"
				:danmu-list="commentList"
				:enable-play-gesture="true"
				@timeupdate="timeupdate"
				@click="pauseVideo"
			></video>
			<view class="vedio-opera"></view>
			<view class="play-btn" v-show="isPause" @click="pauseVideo"><view class="iconfont iconbofang1"></view></view>
		</view>
		<view class="footer">
			<view class="artist-info">
				<image class="artist-header" :src="info.artists && info.artists[0] ? info.artists[0].img1v1Url : ''" mode="aspectFill"></image>
				<text class="artist-name">{{ info.artists && info.artists[0] ? info.artists[0].name : '' }}</text>
				<text class="iconfont iconanonymous-iconfont"></text>
			</view>
			<view class="mv-info" @click="showDetail = !showDetail">
				<view>
					<text>{{ info.name }}</text>
					<text class="iconfont iconarrowdown" v-show="!showDetail"></text>
					<text class="iconfont iconarrowup" v-show="showDetail"></text>
					<!-- <view>{{info.}}</view> -->
				</view>
			</view>
			<view class="play-count">{{ traceCount(info.playCount) }}次观看</view>
			<div class="progress">
				<progress stroke-width="2" activeColor="white" backgroundColor="gray" :percent="playPercent" @click="setProgress" />
				<view class="control-pointer" ref="controlPointer"></view>
			</div>
			<view class="music-info">
				<view class="like"><view class="iconfont iconxihuan"></view></view>
				<view class="m-music">
					<text class="iconfont iconyinfu"></text>
					<text class="name">{{ info.name }}</text>
					<text class="artist">- {{ info.artistName }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { traceCount } from '@/untils/index.js';
import { getVideoUrl, getVideoInfo } from '@/apis/videopage/index.js';
export default {
	data() {
		return {
			option: {},
			url: '',
			info: {},
			commentList: [],
			autoplay: true,
			isPause: false,
			playPercent: 0,
			videoContext: undefined,
			timerSecond: 0,
			showDetail: false
		};
	},
	onLoad(option) {
		this.option = option;
		if (!option || !option.id) {
			uni.switchTab({
				url: '/pages/index/index'
			});
		}
		uni.getNetworkType({
			success(type) {
				if (type.networkType == '2g' || type.networkType == '3g' || type.networkType == '4g') {
					this.autoplay = false;
					console.info('not auto play');
				}
			}
		});
		this.loadVideo(option.id);
	},
	watch: {
		isPause(val) {
			if (val) {
				this.$refs.videoRef.pause();
			} else {
				this.$refs.videoRef.play();
			}
		}
	},
	methods: {
		loadVideo(id) {
			Promise.all([this.loadUrl(id), this.loadInfo(id)]).then(res => {
				console.info('load success');
				this.videoContext = uni.createVideoContext('videoId');
				this.timerSecond = this.info.duration / 1000;
			});
		},
		loadUrl(id) {
			return getVideoUrl(id).then(res => {
				this.url = res.data.url;
			});
		},
		loadInfo(id) {
			return getVideoInfo(id).then(res => {
				Object.assign(this.info, res.data);
			});
		},
		timeupdate(e) {
			let dom = this.$refs.controlPointer;
			dom._vnode.elm.style.left = `calc(${(e.detail.currentTime / e.detail.duration) * 100 + '%'} - 5px)`;
			this.playPercent = (e.detail.currentTime / e.detail.duration) * 100;
		},
		setProgress(e) {
			console.info(e);
			this.playPercent = e.detail.x / 375 + '%';
			let dom = this.$refs.controlPointer;
			this.videoContext.seek(this.timerSecond * (e.detail.x / 375));
			console.info('dom', dom);
		},
		//获取评论
		loadComment() {},
		pauseVideo() {
			this.isPause = !this.isPause;
		},
		goBack() {
			uni.navigateBack();
		},
		traceCount
	}
};
</script>

<style scoped lang="scss">
.iconfont {
	color: white;
	font-size: 70rpx;
}
.video-play-page {
	background-color: black;
	height: 100vh;
	video {
		width: 100%;
	}
	.header {
		height: 200rpx;
		line-height: 100rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		.mv-tag {
			background-color: rgba(240, 240, 240, 1);
			margin-top: 28rpx;
			height: 48rpx;
			line-height: 48rpx;
			padding: 0 40rpx;
			border-radius: 60rpx 10rpx 60rpx 10rpx;
			font-weight: 700;
		}
		.iconmore- {
			font-size: 48rpx;
		}
	}
	.vedio-content {
		position: relative;
		.play-btn {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: rgba(200, 200, 200, 0);
			opacity: 0.8;
			text-align: center;
			padding: 15%;
			.iconfont {
				font-size: calc(375rpx * 0.6);
			}
		}
	}
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		color: white;
		.play-count {
			padding: 20rpx;
			color: rgba(255, 255, 255, 0.5);
		}
		.mv-info {
			padding: 20rpx;
			.iconfont {
				font-size: 10rpx;
			}
		}
		.artist-info {
			line-height: 50rpx;
			padding: 0 20rpx;
			vertical-align: middle;
			.artist-header {
				border-radius: 50%;
				border-color: white;
				border-style: solid;
				border-width: 2rpx;
				width: 50rpx;
				height: 50rpx;
				background-color: white;
				margin-right:20rpx;
				vertical-align: middle;
			}
			.artist-name {
				font-weight: 700;
				line-height:50rpx;
				margin-right:20rpx;
				vertical-align: middle;
			}
			.iconfont {
				padding: 5rpx 15rpx;
				background-color: $primary-color;
				border-radius: 20rpx;
				font-size:2rpx;
				vertical-align: middle;
				&:before{
					position: relative;
					top: -1px;
				}
			}
		}
		.music-info {
			padding: 20rpx;
			display: flex;
			.m-music {
				margin-left: 20rpx;
				display: flex;
				line-height: 80rpx;
				.iconfont {
					font-size: $uni-font-size-base;
				}
				.name {
					color: white;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					max-width: 50%;
				}
				.artist {
					color: white;
				}
			}
		}
		.progress {
			width: 100%;
			position: relative;
			.control-pointer {
				position: absolute;
				left: -10rpx;
				top: -8rpx;
				z-index: 1;
				background-color: white;
				width: 20rpx;
				height: 20rpx;
				border-radius: 50%;
				opacity: 0.9;
			}
		}
	}
}
</style>
