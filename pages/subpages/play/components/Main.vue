<template>
	<view class='poster'>
		<view class="poster-box" :class='playState ?"":"pause"'>
			<image v-if='picUrl' :src="picUrl" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			info:Object
		},
		computed:{
			playState(){
				return this.$store.state.playState
			},
			picUrl(){
				return this.info && this.info.al && this.info.al.picUrl ? this.info.al.picUrl : ""
			},
		}
		
	}
</script>

<style scoped lang='scss'>
	.poster{
		width:80%;
		.poster-box{
			border-radius: 50%;
			overflow: hidden;
			position: relative;
			width: 100%;
			height:0px;
			padding-top:100%;
			image{
				position:absolute;
				top:0;
				left:0;
				width:100%;
				height:100%;
			}
		}
	}
</style>