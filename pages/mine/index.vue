<template>
	<view class='mine-page'>
		<login-button></login-button>
		<mine-modules @jumpto='jumpto'></mine-modules>
		<like-music-component></like-music-component>
		<mine-music-list></mine-music-list>
		<recommend-list :list='recommendList' footerBtnText='更多推荐歌单' :footerBtnHandler='gotoMusicList' :openItemHandler='openMusicList'></recommend-list>
	</view>
</template>

<script>
	import { getRecommendMusicList } from '@/apis/minepage/index.js'
	import LoginButton from '@/components/LoginButton.vue'
	import MineModules from './components/MineModules.vue'
	import LikeMusicComponent from './components/LikeMusicComponent.vue'
	import MineMusicList from './components/MineMusicList.vue'
	import RecommendList from '@/components/RecommendList.vue'
	export default {
		components:{
			LoginButton,
			MineModules,
			LikeMusicComponent,
			MineMusicList,
			RecommendList
		},
		data() {
			return {
				recommendList:[],
			}
		},
		mounted() {
			this.loadRecommendList()
		},
		methods: {
			loadRecommendList(){
				return getRecommendMusicList().then(res=>{
					this.recommendList = res.result
				})
			},
			jumpto(item){
				console.info('jump to', item)
			},
			gotoMusicList(){
				console.info('jump to music list page')
			},
			openMusicList(e){
				console.info('open music list',e)
			}
		}
	}
</script>

<style lang='scss'>
	.mine-page{
		padding:20rpx;
		&>view{
			margin-top:20rpx;
		}
	}
</style>
