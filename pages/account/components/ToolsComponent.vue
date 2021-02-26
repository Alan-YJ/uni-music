<template>
	<view class='setting-list-component'>
		<uni-list >
			<uni-list-item title='口袋彩铃' showArrow clickable :show-extra-icon="true" :extra-icon="{type:'phone', size:'22'}" size='mini'></uni-list-item>
			<uni-list-item title='创作者中心' showArrow clickable :show-extra-icon="true" :extra-icon="{type:'person', size:'22'}" size='mini'></uni-list-item>
			<uni-list-item title='设置' showArrow clickable :show-extra-icon="true" :extra-icon="{type:'settings', size:'22'}" size='mini'></uni-list-item>
			<uni-list-item title='夜间模式' showSwitch clickable  @switchChange="nightModeChange" :show-extra-icon="true" :extra-icon="{type:'eye-filled', size:'22'}" size='mini'></uni-list-item>
			<uni-list-item title='定时关闭' showArrow clickable :show-extra-icon="true" :extra-icon="{type:'minus', size:'22'}" size='mini'></uni-list-item>
			<uni-list-item title='音乐闹钟' showArrow clickable :show-extra-icon="true" :extra-icon="{type:'sound', size:'22'}" size='mini'></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import UniList from '@/components/uni-list/uni-list.vue'
	import UniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			UniList,
			UniListItem
		},
		data(){
			return{
				
			}
		},
		methods:{
			nightModeChange(e){
				console.info(e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.setting-list-component{
		margin-top:40rpx;
	}
</style>