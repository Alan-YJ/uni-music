<template>
	<view class="video-play-page">
		<view class="header">
			<view class="iconfont iconchangyongicon-1" @click='goBack'></view>
			<view class="mv-tag">
				MV
			</view>
			<view class="opera-ext">
				<view class="iconfont"></view>
				<view class='iconfont iconmore-'></view>
			</view>
		</view>
		<view class="vedio-content">
			<video :src="url" 
				ref='videoRef'
				:controls="false" 
				:autoplay='autoplay'
				:loop='true'
				:danmu-list='commentList'
				:enable-play-gesture='true'
				@click='pauseVideo'></video>
			<view class="vedio-opera">
				
			</view>
			<view class="play-btn" v-show='isPause' @click='pauseVideo'>
				<view class="iconfont iconbofang1"></view>
			</view>
		</view>
		<view class="footer">
			<view class="article-info"></view>
			<view class="mv-info"></view>
			<view class="play-count"></view>
			<progress percent="" show-info />
			<view class="music-info">
				<view class="like">
					<view class="iconfont iconxihuan"></view>
				</view>
				<view class="m-music">
					<text class="iconfont iconyinfu"></text>
					<text class='name'>{{info.name}}</text>
					<text class='artist'> - {{info.artistName}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getVideoUrl, getVideoInfo } from '@/apis/videopage/index.js'
	export default {
		data(){
			return{
				option:{},
				url:"",
				info:{},
				commentList:[],
				autoplay:true,
				isPause:false,
				
			}
		},
		onLoad(option) {
			this.option = option
			if(!option || !option.id){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
			uni.getNetworkType({
				success(type) {
					if(type.networkType == '2g' || type.networkType == '3g' || type.networkType == '4g'){
						this.autoplay = false
						console.info('not auto play')
					}
				}
			})
			this.loadVideo(option.id)
		},
		watch:{
			isPause(val){
				if(val){
					this.$refs.videoRef.pause()
				}else{
					this.$refs.videoRef.play()
				}
			}
		},
		methods:{
			loadVideo(id){
				Promise.all([this.loadUrl(id),this.loadInfo(id)]).then(res=>{
					console.info('success')
				})
				
			},
			loadUrl(id){
				return getVideoUrl(id).then(res=>{
					this.url = res.data.url
				})
			},
			loadInfo(id){
				return getVideoInfo(id).then(res=>{
					Object.assign(this.info,res.data)
				})
			},
			//获取评论
			loadComment(){
				
			},
			pauseVideo(){
				this.isPause = !this.isPause
			},
			goBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	.iconfont{
		color:white;
		font-size: 70rpx;
	}
	.video-play-page{
		background-color:black;
		height:100vh;
		video{
			width:100%;
		}
		.header{
			height:200rpx;
			line-height:100rpx;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			.mv-tag{
				background-color:rgba(240,240,240,1);
				margin-top:28rpx;
				height:48rpx;
				line-height:48rpx;
				padding:0 40rpx;
				border-radius: 60rpx 10rpx 60rpx 10rpx;
				font-weight:700;
			}
			.iconmore-{
				font-size:48rpx;
			}
		}
		.vedio-content{
			position: relative;
			.play-btn{
				position:absolute;
				left: 0;
				right:0;
				top:0;
				bottom:0;
				background-color:rgba(200,200,200,0);
				opacity: .8;
				text-align: center;
				padding:15%;
				.iconfont{
					font-size:calc(375rpx * 0.6);
				}
			}
		}
		.footer{
			position:fixed;
			bottom:0;
			width:100%;
			.music-info{
				padding:20rpx;
				display: flex;
				.m-music{
					margin-left:20rpx;
					display: flex;
					line-height:80rpx;
					.iconfont{
						font-size:$uni-font-size-base;
					}
					.name{
						color:white;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						max-width:50%;
					}
					.artist{
						color:white;
					}
				}
			}
		}
	}
</style>