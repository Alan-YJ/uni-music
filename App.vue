<script>
	export default {
		onLaunch: function() {
			this.$store.dispatch('checkLogin').then(res=>{
				console.info(res)
				if(res.code == 200 && res.profile){
					this.$store.dispatch('refreshLogin')
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang='scss'>
	/*每个页面公共css */
	@import './common/css/common.scss';
	@import './common/css/iconfont.css';
</style>
