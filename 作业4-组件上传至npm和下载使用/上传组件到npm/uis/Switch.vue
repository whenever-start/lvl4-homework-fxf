<template>
	<div class="switch" :class="['switch-'+size,{'off':!isOn},{'disabled':disabled}]" @click="turnOnOff">
		<slot name="open" v-if="isOn"></slot>
		<slot name="close" v-else></slot>
	</div>
</template>

<script>
	export default{
		name:'iSwitch',
		props:{
			size:{
				type:String,
			},
			disabled:{
				type:Boolean,
			}
		},
		data(){
			return {
				isOn:true,
			}
		},
		methods:{
				turnOnOff(){
					if(!this.disabled){
						this.isOn = !this.isOn;
					}
				}
		}
	}
</script>

<style scoped lang="less">
	@import "./base.less";

	.size(@w:46px,@h:22px){
		width: @w;
		height: @h;
		line-height: @h;
		border-radius: @h / 2;
		&:after {
			width: @h - 2;
			height: @h - 2;
		}
		// 关闭
		&.off {
			background-color: @Sub;
			text-align: left;
			&:after {
				transition: left .3s linear;
				left:@w - @h;
			}
		}
	}

	.switch {
		.size();
		display:inline-block;
		position: relative;
		box-sizing: border-box;
		padding: 0 10px;
		background-color: @Primary;
		color:#fff;
		text-align: right;
		font-size: 12px;
		transition: background-color .3s linear;
		cursor:pointer;
		&:after {
			transition: left .3s linear;
			content: '';
			position:absolute;
			border-radius:50%;
			top: 1px;
			left: 1px;
			background-color: #fff;
		}
		&.switch-large {
			.size(60px,22px);
		}
		&.switch-small {
			.size(40px,18px);
		}
		&.disabled {
			cursor: not-allowed;
		}
	}
</style>