<template>
	<view class='mine-page'>
		<login-button></login-button>
		<mine-modules @jumpto='jumpto'></mine-modules>
		<like-music-component></like-music-component>
		<mine-music-list></mine-music-list>
		<recommend-music-list></recommend-music-list>
	</view>
</template>

<script>
	import LoginButton from '@/components/LoginButton.vue'
	import MineModules from './components/MineModules.vue'
	import LikeMusicComponent from './components/LikeMusicComponent.vue'
	import MineMusicList from './components/MineMusicList.vue'
	import RecommendMusicList from './components/RecommendMusicList.vue'
	export default {
		components:{
			LoginButton,
			MineModules,
			LikeMusicComponent,
			MineMusicList,
			RecommendMusicList
		},
		data() {
			return {
				
			}
		},
		methods: {
			jumpto(item){
				console.info('jump to', item)
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
