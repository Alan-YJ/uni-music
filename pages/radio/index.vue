<template>
	<view class='radio-page'>
		<login-button></login-button>
		<created-radio-list></created-radio-list>
		<RecommendList :list='radioRecommendList' :showCount='false' footerBtnText='更多推荐播单' :footerBtnHandler='gotoRecommendRadio' :openItemHandler='gotoRadioDetail'></RecommendList>
	</view>
</template>
<script>
	import { getRecommendRadio } from '@/apis/radiopage/index.js'
	import LoginButton from '@/components/LoginButton.vue'
	import CreatedRadioList from './components/CreatedRadioList.vue'
	import RecommendList from '@/components/RecommendList.vue'
	export default {
		components:{
			LoginButton,
			CreatedRadioList,
			RecommendList
		},
		data() {
			return {
				radioRecommendList:[]
			}
		},
		mounted(){
			this.loadRecommendList()
		},
		methods: {
			loadRecommendList(){
				return getRecommendRadio().then(res=>{
					this.radioRecommendList = res.result
				})
			},
			gotoRecommendRadio(){
				console.info('goto recommend radio list page')
			},
			gotoRadioDetail(item){
				console.info(item)
			}
		}
	}
</script>

<style lang='scss'>
	.radio-page{
		padding:20rpx;
		.recommend-music-list-component{
			margin-top:20rpx;
		}
	}
</style>
