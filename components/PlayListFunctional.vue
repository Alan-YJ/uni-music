<template functional>
	<view class='plat-list-component'>
		<navigator hover-class="none" :url='`/pages/subpages/album/index?id=${item.id}`' class='list-item' v-for='item in props.list'>
			<image class='list-image' mode="widthFix" :src='item.picUrl'></image>
			<view class="play-count">{{item.playCount}}</view>
			<view class="title">{{item.name}}</view>
		</navigator>
	</view>
</template>

<style>

</style>
 