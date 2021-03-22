<template>
	<view class='album-detail-page' @scroll='scroll'>
		<a-header :info='info' ></a-header>
		<a-list :list='list'></a-list>
	</view>
</template>

<script>
	import { getAlbumDetail, getAlbumSongs } from '@/apis/album.js'
	import AHeader from './components/Header.vue'
	import AList from './components/List.vue'
	export default {
		components:{
			AHeader, AList
		},
		data(){
			return{
				info:{},
				list:[]
			}
		},
		onLoad(options) {
			this.loadDetail(options)
		},
		methods:{
			//获取歌单详情
			loadDetail(options){
				return getAlbumDetail(options.id, options).then(res=>{
					this.info = res.playlist
					this.loadSongs(res.privileges.map(item=>{return item.id}))
				})
			},
			//获取歌曲列表详情
			loadSongs(ids){
				return getAlbumSongs(ids.join(',')).then(res=>{
					this.list = res.songs
				})
			},
			scroll(e){
				console.info(e)
			}
		}
	}
</script>

<style scoped lang='scss'>
	.album-detail-page{
		&>view.album-header{
			padding:20rpx;
		}
	}
</style>