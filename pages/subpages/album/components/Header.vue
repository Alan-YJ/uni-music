<template>
	<view class='album-header'>
		<view class='bg' :style='`background-image:url(${info.coverImgUrl})`'></view>
		<view class="title-wrap">
			<view class='left'>
				<text class="iconfont iconchangyongicon-1" @click="back"></text>
				<text class="title">
					<slot name='title'>
						{{title}}
					</slot>
				</text>
			</view>
			<view class='right'>
				<text class="iconfont iconsousuo1"></text>
				<text class="iconfont iconmore-"></text>
			</view>
		</view>
		<view class="main">
			<view class="cover">
				<image :src="info.coverImgUrl" mode="widthFix"></image>
				<play-count :value='traceCount(info.playCount)'></play-count>
			</view>
			<view class="detail">
				<view>
					<view class="name">{{info.name}}</view>
					<view class="user">
						<image :src="creator.avatarUrl" mode="aspectFill"></image>
						{{creator.nickname}}
					</view>
				</view>
				<view class="desc">{{info.description}}</view>
			</view>
		</view>
		<view class="info-wrap">
			<view class="favorites">
				<text class="iconfont iconshoucang2"></text>
				<text class="count">{{info.trackCount}}</text>
			</view>
			<view class="comment">
				<text class="iconfont iconxiaoxi1"></text>
				<text class="count">{{info.commentCount}}</text>
			</view>
			<view class="share">
				<text class="iconfont iconfenxiang1"></text>
				<text class="count">{{info.shareCount}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import PlayCount from '@/components/PlayCount.vue'
	import { traceCount } from '@/untils/index.js'
	export default {
		components:{
			PlayCount
		},
		props:{
			info:Object
		},
		data(){
			return{
				title:"歌单®"
			}
		},
		computed:{
			creator(){
				if(this.info && this.info.hasOwnProperty('creator')){
					return this.info.creator
				}else{
					return {}
				}
			}
		},
		methods:{
			back(){
				uni.navigateBack({})
			},
			setTitle(title){
				this.title = title
			},traceCount
		}
	}
</script>

<style scoped lang='scss'>
	.title-wrap{
		display: flex;
		justify-content: space-between;
		font-size:32rpx;
		align-items: center;
		position: relative;
		z-index: 2;
		.iconfont,.title{
			vertical-align: middle;
		}
		.left{
			&>text{
				margin-right:30rpx;
			}
		}
		.right{
			&>text{
				margin-left:30rpx;
			}
			.iconfont{
				font-size:48rpx;
			}
		}
	}
	.main{
		margin-top:20rpx;
		display: flex;
		position: relative;
		z-index: 2;
		padding-bottom:50rpx;
		.cover{
			width:250rpx;
			margin-right:20rpx;
			flex-shrink: 0;
			position: relative;
			.play-count-component{
				position:absolute;
				top:10rpx;
				right:10rpx;
			}
			image{
				width:100%;
				border-radius: 20rpx;
			}
		}
		.detail{
			flex:1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-size:24rpx;
			.name{
				font-size:32rpx;
			}
			.user{
				line-height:100rpx;
				image{
					width:50rpx;
					height:50rpx;
					border-radius: 50%;
					margin-right:15rpx;
					vertical-align: middle;
				}
			}
			.desc{
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				max-width: calc(100vw - 360rpx);
			}
		}
	}
	.album-header{
		position:relative;
		color:white;
		.bg{
			filter: blur(50rpx);
			position: absolute;
			bottom: 0;
			top: 0;
			left: 0;
			right: 0;
			z-index: 0;
			zoom: 2;
		}
	}
	.info-wrap{
		position: absolute;
		z-index: 5;
		background-color: white;
		border-radius: 40rpx;
		bottom:0;
		left:50%;
		transform: translate(-50%, 50%);
		color:black;
		font-size:24rpx;
		display: flex;
		padding:20rpx 40rpx;
		line-height:40rpx;
		color:#2d2d2d;
		box-shadow: 1rpx 1rpx 5rpx rgba(100,100,100,.3);
		&>view{
			border-right:1px solid gray;
			margin-left:20rpx;
			&:last-child{
				border:none;
			}
			text{
				vertical-align: middle;
				margin:0 5rpx;
				&:last-child{
					margin-right:20rpx;
				}
			}
		}
		.iconfont{
			font-size:44rpx;
		}
	}
</style>