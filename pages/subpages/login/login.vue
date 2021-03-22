<template>
	<view class='login-page'>
		<uni-forms :model='info' ref="form" :rules="rules">
			<uni-forms-item label="" name="phone">
				<input type="number" v-model='info.phone' placeholder="输入手机号" />
			</uni-forms-item>
			<uni-forms-item label="" name="password">
				<input type="password" v-model='info.password' placeholder="输入密码" />
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
				rules:{
					phone:{
						required: true, message:"请输入手机号", pattern:/[0-9]{11}/
					},
					password:{
						required: true, message:"请输入密码", minLength:6, maxLength:20
					}
				},
				hasProvider:false,
				providerList:[],
				provider:{}
			}
		},
		onReady() {
			this.getProvider()
		},
		methods: {
			login(){
				if(this.info.phone.trim()=="" || this.info.password.trim()==""){
					return
				}
				
				console.info('login')
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
			}
		}
	}
</script>

<style lang='scss'>
	.login-page{
		padding:30rpx;
		padding-top:300rpx;
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
