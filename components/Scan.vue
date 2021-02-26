<template>
	<view>

	</view>
</template>

<script>
	export default {
		data(){
			return{
				typeList:[
					plus.barcode.QR
				],
				barcode:undefined
			}
		},
		methods:{
			open(){
				let pages = getCurrentPages()
				let currentWebview = pages[pages.length - 1].$getAppWebview()
				
				this.barcode = plus.barcode.create('barcode', this.typeList, {
					position:'fixed',
					top:'64px',
					left:'0',
					width:'100%',
					height:'100%'
				})
				this.barcode.onmarked = this.onmarked
				
				currentWebview.append(this.barcode)
				this.barcode.start()
			},
			onmarked(type, result){
				this.openStartRecognize(result)
				this.$emit('success', result)
				this.close()
			},
			close(){
				this.barcode.close()
			}
		}
	}
</script>

<style scoped>

</style>