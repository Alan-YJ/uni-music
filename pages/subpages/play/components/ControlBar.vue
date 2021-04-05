<template>
	<view class='control-bar'>
		<view class='time'>{{currentTime}}</view>
		<view class='bar'>
			<progress :percent="time / all" border-radius='10' active stroke-width="3" backgroundColor='#C0C0C0'/>
		</view>
		<view class='end-time'>{{allTime}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			info:Object,
			currentTime: Number
		},
		data(){
			return{
				time:0,
			}
		},
		computed:{
			currentSong(){
				return this.$store.getters.currentSong ? this.$store.getters.currentSong : {}
			},
			all(){
				return this.currentSong.time
			},
			allTime(){
				if(this.all){
					return this.getTime(this.all * 1000)
				}else{
					return '--:--'
				}
			},
			currentTime(){
				if(this.currentSong.time){
					return this.getTime(this.time)
				}else{
					return '--:--'
				}
			}
		},
		methods:{
			getTime(timeStr){
				const date = new Date(timeStr)
				const minute = date.getMinutes()
				const second = date.getSeconds()
				return `${minute < 10? '0'+minute : minute}:${second<10?'0'+second: second}`
			}
		}
	}
</script>

<style lang='scss'>
	.control-bar{
		padding:40rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;;
		.bar{
			flex:1;
			padding:0 20rpx;
		}
		.time,.end-time{
			color:white;
		}
	}
</style>