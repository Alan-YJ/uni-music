<template>
	<view>
		<view class="videos-wrap">
			<view v-for='item in list' :key='item.id'>
				<image :src="item.picUrl" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { getRecommendVideos } from '@/apis/videopage/index.js'
	export default {
		data(){
			return {
				page: 1,
				limit: 20,
				list:[]
			}
		},
		mounted(){
			this.loadList()
		},
		methods:{
			loadList(){
				getRecommendVideos().then(res=>{
					console.info(res)
					this.list = res.result
				})
			}
		}
		
	}
</script>

<style scoped>

</style>