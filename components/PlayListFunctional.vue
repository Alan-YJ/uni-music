<template functional>
	<view class='plat-list-component'>
		<view class='list-item' v-for='item in props.list'>
			<image class='list-image' mode="widthFix" :src='item.picUrl'></image>
			<view class="play-count">{{item.playCount}}</view>
			<view class="title">{{item.name}}</view>
		</view>
	</view>
</template>

<style>

</style>
 