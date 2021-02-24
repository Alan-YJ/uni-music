<template>
	<view class='mine-modules-component'>
		<view class="module-item" v-for='item in list' :key='item.handler' @click='emitItem(item)'>
			<view class="iconfont" :class='item.icon'></view>
			<view class="title">
				<text class="tips" v-if='item.tips'></text>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list:[
					{
						icon:'iconbendiyinyue36',
						title:'本地/下载',
						tips:false,
						handler:"local"
					},
					{
						icon:'iconyunpan',
						title:'云盘',
						tips:false,
						handler:"cloud"
					},
					{
						icon:'icongouwudai',
						title:'已购',
						tips:false,
						handler:"adopter"
					},
					{
						icon:'iconbofang3',
						title:'最近播放',
						tips:false,
						handler:"played"
					},
					{
						icon:'iconhaoyou',
						title:'我的好友',
						tips:false,
						handler:"friend"
					},
					{
						icon:'iconshoucang3',
						title:'收藏和赞',
						tips:false,
						handler:"favorites"
					},
				]
			}
		},
		methods:{
			emitItem(item){
				this.$emit("jumpto",item)
			}
		}
	}
</script>

<style scoped lang='scss'>
	.mine-modules-component{
		background-color:white;
		border-radius: 40rpx;
		padding:40rpx 0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 60rpx;
		.module-item{
			text-align:center;
			.iconfont{
				font-size:60rpx;
				color:$primary-color;
			}
			.title{
				margin-top:10rpx;
				line-height:24rpx;
				vertical-align: middle;
				.tips{
					vertical-align: middle;
					width:12rpx;
					height:12rpx;
					background-color: $primary-color;
					display: inline-block;
					border-radius: 50%;
					margin-right:10rpx;
				}
				text:not(.tips){
					color:deep-dark;
				}
			}
		}
	}
</style>