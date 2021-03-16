<template functional>
	<view class='plat-list-component'>
		<navigator class='list-item' v-for='(item,index) in props.list' hover-class="none" :url="`/pages/subpages/album?id=${item.id}`" :key='index'>
			<image class='list-image' mode="widthFix" :src='item.picUrl'></image>
			<view class="play-count">{{item.playCount}}</view>
			<view class="title">{{item.name}}</view>
		</navigator>
	</view>
</template>