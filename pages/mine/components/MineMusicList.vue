<template>
	<view class='mine-music-list-component'>
		<view class="header-links">
			<view class="link-item" :class="{actived:type==1}" @click='setType(1)'>
				<text>创建歌单</text>
			</view>
			<view class="link-item" :class="{actived:type==2}" @click='setType(2)'>
				<text>收藏歌单</text>
			</view>
		</view>
		<mine-created-music-list></mine-created-music-list>
		<mine-favorites-music-list></mine-favorites-music-list>
	</view>
</template>

<script>
	import MineCreatedMusicList from './MineCreatedMusicList.vue'
	import MineFavoritesMusicList from './MineFavoritesMusicList.vue'
	export default {
		components:{
			MineCreatedMusicList,
			MineFavoritesMusicList
		},
		data(){
			return{
				type:1
			}
		},
		watch:{
			type(val){
				let createdDom = document.querySelector('.created-music-list-component')
				let favoritesDom = document.querySelector('.favorites-music-list-component')
				if(val==1){
					uni.pageScrollTo({
						duration:100,
						scrollTop: createdDom.offsetTop
					})
				}else if(val==2){
					uni.pageScrollTo({
						duration:100,
						scrollTop: favoritesDom.offsetTop
					})
				}
			}
		},
		methods:{
			setType(type){
				this.type = type
			}
		}
		
		
	}
</script>

<style scoped lang='scss'>
	.mine-music-list-component{
		padding:20rpx 0;
		.header-links{
			display: flex;
			justify-content: space-around;
			font-size:30rpx;
			.actived{
				font-weight: 700;
				position:relative;
				text{
					position:relative;
					z-index: 1;
				}
				&::after{
					content:"";
					position:absolute;
					left:0;
					right:0;
					bottom:3rpx;
					border-bottom:6px solid $primary-color;
					z-index: 0;
					border-radius: 3px;
				}
			}
		}
	}
</style>