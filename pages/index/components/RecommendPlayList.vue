<template>
	<view class='plat-list-component'>
		<view class='list-item' v-for='(item,index) in list' :key='index'>
			<image class='list-image' mode="widthFix" :src='item.picUrl'></image>
			<view class="play-count">{{item.playCount}}</view>
			<view class="title">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props:{
			list:Array
		},
		data(){
			return{
				
			}
		}
		
	}
</script>

<style scoped>

</style>