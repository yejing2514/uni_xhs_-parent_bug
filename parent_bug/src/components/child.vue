<template>
	<view>
		我是子组件
	</view>
</template>

<script>
	export default {
	  name: 'child',
		mounted() {
			// 输出的结果是异常的$parent: undefined 预期正常的结果应该要拿到parent实例
			console.log(this)
		},
	  methods: {
	  }
	};

</script>

<style lang="scss">

</style>