<template>
	<view class='search-page'>
		<view class="header">
			<m-header @search='search'/>
		</view>
		<scroll-view class='search-scroll' scroll-y="true" >
			<view class="banner"></view>
			<view class="hisrory">
				<m-history :list='historys' @search='search'></m-history>
			</view>
			<view class="hot-list">
				<m-hot-list @search='search'></m-hot-list>
			</view>
			<view class="special-zone">
				<!-- 专区无Api -->
			</view>
			<view class="activity">
				<!-- 推荐活动无Api -->
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Header from './components/Header.vue'
	import History from './components/History.vue'
	import HostList from './components/HotList.vue'
	export default {
		components:{
			"m-header":Header,
			'm-history':History,
			"m-hot-list":HostList,
		},
		data(){
			return{
				historys:[]
			}
		},
		mounted(){
			this.loadHistory()
		},
		methods:{
			search(keyword){
				let word = keyword.trim()
				if(word.length == 0){
					return false
				}
				
				if(this.historys.indexOf(word) > -1){
					this.historys.splice(this.historys.indexOf(word), 1)
				}
				this.historys.unshift(word)
				uni.setStorageSync('history', JSON.stringify(this.historys.slice(0,10)))
				
				console.info('search', keyword)
			},
			loadHistory(){
				let data = uni.getStorageSync('history')
				this.historys = data? JSON.parse(data): this.historys
			}
			
		}
	}
</script>

<style lang='scss'>
	.search-page{
		padding:20rpx;
	}
	.search-scroll{
		height: calc(100vh - 120rpx);
	}
</style>