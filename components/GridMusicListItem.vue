<template >
	<view class='music-list-cover-component' @click='emitClick'>
		<view class="pic">
			<image :src="item.picUrl" mode="widthFix"></image>
			<play-count v-if='showCount' :value='count'></play-count>
		</view>
		<view class="title">{{item.name}}</view>
	</view>
</template>

<script>
	import PlayCount from '@/components/PlayCount.vue'
	import { traceCount } from '@/untils/index.js'
	export default{
		components:{
			'play-count':PlayCount
		},
		props:{
			item: Object,
			showCount:Boolean
		},
		computed:{
			count(){
				return traceCount(this.item.playCount)
			}
		},
		methods:{
			emitClick(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang='scss'>
	.music-list-cover-component{
		width: 100%;
		position:relative;
		.pic{
			width:100%;
			image{
				width:100%;
				border-radius: 20rpx;
			}
		}
		.play-count-component{
			position:absolute;
			top:10rpx;
			right:10rpx;
		}
		.title{
			 display: -webkit-box;
			 overflow: hidden;
			 -webkit-line-clamp: 2;
			 -webkit-box-orient: vertical;
		}
	}
</style>