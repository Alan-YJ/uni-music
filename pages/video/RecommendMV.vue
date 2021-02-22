<template>
	<view class="video-component">
		<scroll-view scroll-y="true" class="video-list" @refresherpulling='refresherpulling'>
			<list-video-item v-for='item in list' :key='item.id' :item='item'></list-video-item>
		</scroll-view>
	</view>
</template>

<script>
	import {
		getRecommendMv
	} from '@/apis/videopage/index.js'
	import ListVideoItem from './components/ListVideoItem.vue'
	export default {
		components: {
			ListVideoItem
		},
		data() {
			return {
				list: [],
				pagination: {
					page: 1,
					limit: 20
				}
			}
		},
		mounted() {
			this.loadList()
		},
		methods: {
			loadList() {
				return getRecommendMv(this.pagination).then(res => {
					this.list = res.result
				})
			},
			//下拉
			refresherpulling(e){
				this.pagination = {
					page: 1,
					limit: 20
				}
				this.loadList()
				console.info(e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.video-list {
		height: calc(100vh - 90rpx - 90rpx);

		::v-deep .uni-scroll-view-content {
			display: block;
		}
	}
</style>
