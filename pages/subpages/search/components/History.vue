<template>
	<view class='hisrory' v-show='list.length > 0'>
		<text class='title'>历史</text>
		<scroll-view scroll-x="true" @scroll='scroll' @scrolltolower='hideAfter' @scrolltoupper='hideBefore' class='list-wrap hide-before scroll-history' show-scrollbar='false'>
			<view class='list'>
				<text class="item" v-for='item in list' :key='item' @click='search(item)'>{{item}}</text>
			</view>
		</scroll-view>
		<view class="iconfont icondelete"></view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Array
		},
		data(){
			return{
				scrollDom:undefined
			}
		},
		mounted(){
			this.scrollDom = document.querySelector('.scroll-history')
		},
		methods:{
			search(item){
				this.$emit('search', item)
			},
			scroll(e){
				if(e.detail.scrollLeft != 0){
					this.scrollDom.classList.remove('hide-before')
				}
				if(e.detail.scrollWidth - (e.detail.scrollLeft + this.scrollDom.offsetWidth) > 20){
					this.scrollDom.classList.remove('hide-after')
				}
			},
			hideBefore(e){
				this.scrollDom.classList.add('hide-before')
			},
			hideAfter(e){
				this.scrollDom.classList.add('hide-after')
			}
		}
	}
</script>

<style scoped lang='scss'>
	.hisrory{
		display: flex;
		justify-content: space-between;
		margin:40rpx 0 40rpx 0;
		width: 100%;
		line-height:72rpx;
		.title{
			font-weight: 700;
			font-size:32rpx;
			width:3rem;
			flex-shrink: 0;
		}
		.list-wrap{
			flex:1;
			width:calc(100% - 168rpx);
			position: relative;
			&::before{
				content:"";
				width:72rpx;
				height:100%;
				display: block;
				position: absolute;
				left:0;
				top:0;
				z-index: 1;
				background: linear-gradient(to left, rgba(200,200,200,.1), #efefef);
			}
			&::after{
				content:"";
				width:72rpx;
				height:100%;
				display: block;
				position: absolute;
				right:0;
				top:0;
				background: linear-gradient(to right, rgba(200,200,200,.1), #efefef);
			}
			&.hide-before{
				&::before{
					display: none;
				}
			}
			&.hide-after{
				&::after{
					display: none;
				}
			}
			.list{
				white-space: nowrap;
				width:1rem;
			}
			.item{
				font-size:32rpx;
				background-color:rgba(200,200,200,.7);
				margin-right:.5rem;
				padding:18rpx 36rpx;
				border-radius: 36rpx;;
			}
		}
		.iconfont{
			flex-shrink: 0;
			width:36rpx;
			font-size:36rpx;
			text-align: right;
			background:linear-gradient(to right, rgba(200, 200,200,.1), #efefef);
			&:active{
				color:$primary-color;
			}
		}
	}
</style>