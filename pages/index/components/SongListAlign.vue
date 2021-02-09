<template>
	<view class='align-song-list-component'>
		<view class="section-title">
			私人定制
		</view>
		<view class="flex">
			<view class='section-title'>
				<text class="iconfont iconshuaxin"></text>
				<text>{{subTitle}}</text>
			</view>
			<view>
				<RadiusLink>
					<template #text>
						<view>
							<text class="iconfont iconbofang1"></text>
							播放
						</view>
					</template>
				</RadiusLink>
			</view>
		</view>
		<scroll-view scroll-x="true" >
			<view></view>
		</scroll-view>
	</view>
</template>

<script>
	import RadiusLink from '@/components/RadiusLink.vue'
	export default {
		components:{
			RadiusLink
		},
		props:{
			dataSource:Object
		},
		computed:{
			subTitle(){
				return this.dataSource?.uiElement?.subTitle?.title
			}
		}
		
	}
</script>

<style scoped>
	.iconbofang1{
		margin-right:10rpx;
		padding-left:2rpx;
	}
</style>