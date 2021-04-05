<template>
	<view class='album-list'>
		<uni-list :border='false'>
			<uni-list-item clickable  class='playAll' title="" note="" >
				<template slot='header'>
					<view class="iconfont iconbofang3 header"></view>
				</template>
				<template slot='body'>
					<view class='title-wrap'>
						<text class='title'>播放全部</text>
						<text class='desc'>({{list.length}})</text>
					</view>
				</template>
				<template slot='footer'>
					<view class='icon-wrap'>
						<text class="iconfont icon1_download"></text>
						<text class="iconfont iconduoxuan"></text>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item clickable :border='false' :key='item.id' v-for='(item, index) in list' class='playItem' :note="item.ar.map(a=>a.name).join('/')+' - '+item.al.name" @click="openList(index, item)">
				<template slot='header'>
					<view class="index">{{index+1}}</view>
				</template>
				<template slot='body'>
					<view class="name-wrap">
						<view class="name">
							<text>{{item.name}}</text>
							<text class="desc" v-if='item.alia.length>0'>({{item.alia[0]}})</text>
						</view>
						<view class="artist-wrap">
							{{item.ar.map(a=>a.name).join("/")}}
							 - 
							{{item.al.name}}
						</view>
					</view>
				</template>
				<template slot='footer'>
					<view class='icon-wrap'>
						<text class="iconfont iconbofang2"></text>
						<text class="iconfont iconmore-"></text>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		props:{
			list:Array
		},
		computed:{
			songs:{
				get(){
					return this.$store.state.songs
				},
				set(val){
					this.$store.commit('setSongs', val)
				}
			},
			index:{
				get(){
					return this.$store.state.index
				},
				set(val){
					this.$store.commit('setIndex', val)
				}
			}
		},
		methods:{
			openList(index, item){
				this.index = index
				this.songs = this.list
				uni.navigateTo({
					url:"/pages/subpages/play/index?"+"id="+this.list.map(item=>{
						return item.id
					})
				})
			}
		}
	}
</script>

<style lang='scss'>
	.album-list{
		padding-top:50rpx;
		position: relative;
		background-color: white;
		.iconfont{
			font-size:40rpx;
			color:$primary-color;
		}
		.header{
			margin-right:20rpx;
		}
		.title-wrap{
			flex:1;
			font-size:32rpx;
			line-height:50rpx;
			.title{
				font-weight: 700;
			}
			.desc{
				color:gray;
			}
		}
		.icon-wrap{
			.iconfont{
				color:black;
				margin-left:20rpx;
			}
		}
		.uni-list-item__container{
			display: flex;
			justify-content: space-between;
		}
		.index{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right:20rpx;
			color:gray;
			width:50rpx;
		}
		.desc{
			color:gray;
		}
		.name-wrap{
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			flex:1;
			
		}
		.artist-wrap{
			margin-top:10rpx;
			font-size:24rpx;
			color:gray;
		}
		.uni-list-item__container{
			justify-content: space-between;
		}
	}
</style>