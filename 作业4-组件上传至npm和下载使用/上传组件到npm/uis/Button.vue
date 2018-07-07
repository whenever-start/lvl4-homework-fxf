<template>
	<button class="btn" :class="['btn-'+type,'btn-'+size,{'disabled':disabled}]">
		<slot></slot>
	</button>
</template>

<script>
	export default{
		name:'Button',
		props:{
			type:{
				type:String,
				default:'info',
			},
			size:{
				type:String,
			},
			disabled:{
				type:Boolean,
			}
		}
	}
</script>

<style lang="less" scoped>
	@import './base.less';
	
	.btn-color(@cl){
		background-color: @cl;
		border-color: @cl;
		color:#fff;
		&:hover{
			background-color: lighten(@cl,5%);
		}
	}
	.size(@h:32px,@padding:8px) {
		padding: @padding 2 * @padding;
		height: @h;
		border-radius: @h / 2;
	}
	.btn {
		.size();
		cursor:pointer;
		// type
		&.btn-info {
			.btn-color(@Info);
		}
		&.btn-success {
			.btn-color(@Success);
		}
		&.btn-warning {
			.btn-color(@Warning);
		}
		&.btn-error {
			.btn-color(@Error);
		}
		// size
		&.btn-large {
			.size(36px,10px);
		}
		&.btn-small {
			.size(28px,4px);
		}
		&.disabled {
			cursor: not-allowed;
			.btn-color(@Disabled);
			&:hover{
				background-color: @Disabled;
			}
		}
	}
</style>