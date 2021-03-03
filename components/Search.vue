<template>
	<view>
		<uni-status-bar fixed >
			<block slot='left'></block>
		</uni-status-bar>
	</view>
</template>

<script>
	import StatusBar from './uni-nav-bar/uni-status-bar.vue'
	export default {
		components:{
			uni-status-bar:StatusBar
		}
	}
</script>

<style scoped>

</style>