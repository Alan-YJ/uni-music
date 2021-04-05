<template>
	<view class='play-page'>
		<view class="header">
			<m-header :info='currentSong' v-if='currentSong'></m-header>
		</view>
		<view class="main">
			<m-main :info='currentSong' ></m-main>
		</view>
		<view>
			<view class="icons-wrap">
				<m-play-icons :info='currentSong'></m-play-icons>
			</view>
			<view class="control-wrap">
				<m-control-bar :currentTime='startTime' :info='currentSong'></m-control-bar>
			</view>
			<view class="opera-wrap">
				<m-opera :info="currentSong"></m-opera>
			</view>
		</view>
		<view class="bg" :style="`background-image:url(${picUrl})`"></view>
	</view>
</template>

<script>
	import Header from './components/Header.vue'
	import Main from './components/Main.vue'
	import Opera from './components/Opera.vue'
	import ControlBar from './components/ControlBar.vue'
	import PlayIcons from './components/PlayIcons.vue'
	import { mapState } from 'vuex'
	import { getDetail, getUrl } from '@/apis/play.js'
	// #ifdef H5
	const innerAudioContext = uni.createInnerAudioContext()
	// #endif
	// #ifndef H5
	const bgAudioManager = uni.getBackgroundAudioManager()
	// #endif
	export default {
		components:{
			'm-header': Header,
			'm-main': Main,
			'm-opera': Opera,
			'm-control-bar':ControlBar,
			'm-play-icons':PlayIcons
		},
		data(){
			return{
				ids:[],
				params:{},
				timer:undefined,
				startTime:0
			}
		},
		computed:{
			...mapState([
				'playIndex','songs'
			]),
			currentSong(){
				return this.songs.length > this.playIndex ? this.songs[this.playIndex] : undefined
			},
			playIndex:{
				get(){
					return this.$store.state.playIndex
				},
				set(val){
					this.$store.commit('setIndex', val)
				}
			},
			songs:{
				get(){
					return this.$store.state.songs
				},
				set(val){
					this.$store.commit('setSongs', val)
				}
			},
			url(){
				return this.currentSong && this.currentSong.urlInfo && this.currentSong.urlInfo.url? this.currentSong.urlInfo.url:""
			},
			picUrl(){
				return this.currentSong && this.currentSong.al && this.currentSong.al.picUrl ? this.currentSong.al.picUrl : ""
			},
			playState:{
				get(){
					return this.$store.state.playState
				},
				set(val){
					this.$store.commit('changeState', val)
				}
			}
		},
		created() {
			this.ids = this.getIds()
			if(this.ids){
				Promise.all([this.getDetailInfo(), this.getUrl()]).then(()=>{
					if(this.songs.length > 0 && !this.playIndex){
						this.playIndex = 0
					}
					this.initAudio()
				})
			}else{
				uni.redirectTo({
					url: '/'
				})
			}
		},
		watch:{
			playState(val){
				if(val){
					// #ifdef H5
					innerAudioContext.play()
					// #endif
					// #ifndef H5
					bgAudioManager.play()
					// #endif
					this.timer = setInterval(()=>{
						this.startTime ++
					},1000)
				}else{
					// #ifdef H5
					innerAudioContext.pause()
					// #endif
					// #ifndef H5
					bgAudioManager.pause()
					// #endif
					clearInterval(this.timer)
				}
			}
		},
		methods:{
			getIds(){
				let result
				const urlParams = location.href.substring(location.href.indexOf("?")+1).split('&')
				urlParams.forEach(params=>{
					const key = params.split('=')?params.split('=')[0]:""
					const value = params.split('=')?params.split('=')[1]:""
					this.params = {
						[key]: value
					}
					if(key == 'id'){
						result = value
					}
				})
				return result? result : undefined
			},
			initAudio(){
				// #ifdef H5
				innerAudioContext.src = this.url
				innerAudioContext.currentTime = this.startTime
				innerAudioContext.pause()
				innerAudioContext.onCanplay(()=>{
					this.$set(this.currentSong, 'time', innerAudioContext.duration)
				})
				// #endif
				// #ifndef H5
				bgAudioManager.title = this.currentSong.name
				bgAudioManager.coverImgUrl = this.picUrl
				bgAudioManager.currentTime = this.startTime
				bgAudioManager.src = this.url
				bgAudioManager.pause()
				bgAudioManager.onCanplay(()=>{
					this.$set(this.currentSong, 'time', innerAudioContext.duration)
				})
				// #endif
			},
			getDetailInfo(){
				return getDetail(this.ids).then(res=>{
					let list = res.songs
					list.forEach((item, index)=>{
						Object.assign(item, {
							privilege: res.songs[index]
						})
					})
					this.songs = list
				})
			},
			getUrl(){
				return getUrl(this.ids).then(res=>{
					this.songs.forEach((song, index)=>{
						Object.assign(song, {
							urlInfo: res.data[index]
						})
					})
				})
			}
		}
	}
</script>

<style scoped lang='scss'>
	.play-page{
		height:100vh;
		padding:20rpx;
		text-shadow: 2rpx 2rpx 2rpx rgba(200,200,200,.5);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.bg{
			position:absolute;
			top:0;
			bottom:0;
			left:0;
			right:0;
			background-size:cover ;
			filter: blur(35px) brightness(0.8);
			z-index: 0;
		}
		&>view{
			position: relative;
			z-index: 1;
		}
		.main{
			flex:1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>