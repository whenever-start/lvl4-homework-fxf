<template>
	<div class="select-component">
		<div class="select-box">
			<input type="text" readonly autocomplete="off" placeholder="请选择"
				v-model="value" 
				@click.prevent="isShow = !isShow"
			>
		</div>
		<div class="drop-box" v-show="isShow">
			<ul class="list">
				<li v-for="item in items" :key="item.id" @click="selectItem(item)">
					{{item.value}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Select',
		data(){
			return {
				items:[
					{
						value:"html",
						id:1,
					},
					{
						value:"css",
						id:2,
					},
					{
						value:"js",
						id:3,
					},
					{
						value:"nodejs",
						id:4,
					},
				],
				value:'',
				isShow:false,
			}
		},
		methods:{
			selectItem(item){
				this.value = item.value;
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "./base.less";
	.select-component {
		position: relative;
			margin: 30px auto 0;
			width: 250px;
		.select-box {
			height: 40px;
			input {
				width: 100%;
				height:100%;
				box-sizing: border-box;
				border:1px solid @Border;
				padding-left: 10px;
				cursor: pointer;
			}
		}
		.drop-box {
			position: absolute;
			margin-top: 15px;
			border: 1px solid @Divider;
			box-shadow: 0 0 1px 1px @Divider;
			width:100%;
			.list {
				&>li {
					line-height: 38px;
					&:nth-child(2n) {
						background: @Divider;
					}
				}
			}
		}
	}
</style>