<template>
	<view class='wrap'>
		<view class="iconfont iconchangyongicon-1"></view>
		<input type="text" v-model='keyword' @input='loadWordList' class='search-input' @keydown.enter='search' :placeholder='placeholder'/>
	</view>
</template>

<script>
	import { getDefaultKeyword, searchKeyword } from '@/apis/searchpage/index.js'
	export default {
		data(){
			return{
				placeholder:"",
				keyword:undefined,
				timer:undefined,
			}
		},
		mounted(){
			this.loadKeyword()
		},
		methods:{
			loadKeyword(){
				return getDefaultKeyword().then(res=>{
					this.placeholder = res.data.realkeyword
				})
			},
			search(){
				if(this.keyword){
					this.$emit('search', this.keyword)
				}else{
					this.$emit('search', this.placeholder)
				}
			},
			loadWordList(){
				this.keyword = this.keyword.trim()
				if(this.keyword.length == 0){
					return
				}
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(()=>{
					this.getWords(this.keyword)
				}, 300)
			},
			getWords(e){
				return searchKeyword(e, {
					keywords: e
				}).then(res=>{
					console.info(res)
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.iconfont{
		font-size:60rpx;
	}
	.wrap{
		display: flex;
		line-height:70rpx;
		font-size:70rpx;
		align-items: center;
		.search-input{
			margin-left:20rpx;
			border-bottom: 1px solid #808080;
			flex:1;
		}
	}
</style>