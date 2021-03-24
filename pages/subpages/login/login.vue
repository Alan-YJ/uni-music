<template>
	<view class='login-page'>
		<uni-forms :value='info' ref="form">
			<uni-forms-item label="" name="phone">
				<input type="number" v-model='info.phone' placeholder="输入手机号" />
				<view class="error-msg" v-show='errorPhone'>{{errorPhone}}</view>
			</uni-forms-item>
			<uni-forms-item label="" name="password">
				<input type="password" v-model='info.password' @keydown.enter='login' placeholder="输入密码" />
				<view class="error-msg" v-show='errorPwd'>{{errorPwd}}</view>
			</uni-forms-item>
			<uni-forms-item label="" name="">
				<radius-button text='登录' @click='login'></radius-button>
			</uni-forms-item>
			<uni-forms-item label="" name="">
				<view class='links'>
					<view>
						<navigator url="/pages/subpages/register/register" class='reg-link'>立即注册</navigator>
					</view>
					<view>
						<navigator >忘记密码</navigator>
					</view>
				</view>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>

<script>
	import UniForms from '@/components/uni-forms/uni-forms.vue'
	import UniFormsItem from '@/components/uni-forms-item/uni-forms-item.vue'
	import RadiusButton from '@/components/RadiusButton.vue'
	import { loginByPhone } from '@/apis/login.js'
	import { setStorage } from '@/untils/index.js'
	export default {
		components:{
			UniForms,UniFormsItem,
			RadiusButton
		},
		data() {
			return {
				info:{
					phone:undefined,
					password:undefined
				},
				errorPhone:"",
				errorPwd:"",
				rules:{
					phone:{
						label:"手机号",
						rules:[
							{required: true, errorMessage:"请输入正确手机号", pattern:/[0-9]{11}/}
						]
					},
					password:{
						label:"手机号",
						rules:[
							{required: true, errorMessage:"请输入密码", minLength:6, maxLength:20}
						]
						
					}
				},
				hasProvider:false,
				providerList:[],
				provider:{}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
			this.getProvider()
		},
		methods: {
			login(){
				const account = this.info.phone.trim()
				const password = this.info.password.trim()
				if (account == '') {
					this.errorPhone = '请输入手机号'
				    return;
				}
				if (!(/^1[3456789]\d{9}$/.test(account))) {
					this.errorPhone = '手机号码有误，请重填'
				    return false;
				}
				this.errorPhone = ''
				this.errorPwd = ''
				this.$refs.form.submit().then(()=>{
					uni.showLoading()
					return loginByPhone(this.info).then(res=>{
						console.info('then',res)
						if(res.msg&&res.msg.indexOf('帐号') > -1){
							this.errorPhone = res.msg
						}else if(res.msg&&res.msg.indexOf('密码')> -1){
							this.errorPwd = res.msg
						}else{
							document.cookie = res.cookie
							this.setStorage('profile', res.profile)
							this.setStorage('token', res.token)
							this.$store.commit('storeLogin', {
								profile:res.profile,
								token: res.token
							})
							uni.switchTab({
								url:'/pages/index/index'
							})
						}
					})
						uni.hideLoading()
				})
			},
			getProvider(){
				const providerList = ['weixin', 'qq', 'sinaweibo']
				uni.getProvider({
					service:"oauth",
					success:(res)=> {
						this.provider = res.provider
						if(res.provider && res.provider.length){
							console.info(res.provider)
							for (let i = 0; i < res.provider.length; i++) {
								const tempProvider = res.provider[i];
								if (~providerList.indexOf(tempProvider)) {
									this.providerList.push({
										value: tempProvider,
										image: '../../static/image/login/' + tempProvider + '.png'
									});
								}
							}
							this.hasProvider = true
						}
					}
				})
			},setStorage
		}
	}
</script>

<style lang='scss'>
	.login-page{
		padding:30rpx;
		padding-top:300rpx;
		.error-msg{
			color:red;
			text-indent: 1rem;
			padding-top:16rpx;
		}
	}
	input{
		font-size:32rpx;
		height:32rpx;
		padding:8rpx;
		border-radius: 36rpx;
		border: 1px solid $primary-color;
		background-color: white;
		text-indent: 1rem;
	}
	input:-internal-autofill-selected{
		background-color: white;
	}
	.links{
		display: flex;
		justify-content: space-between;
		.reg-link{
			color:$primary-color;
		}
	}
</style>
