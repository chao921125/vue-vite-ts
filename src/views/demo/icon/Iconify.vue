<template>
	<p
		>element icon 示例：<el-link :underline="false" type="primary" target="_blank" href="https://element-plus.gitee.io/zh-CN/"
			>官网</el-link
		></p
	>
	<code>
		1、使用 el-icon 配合使用 &lt;el-icon size="16"&gt;&lt;Edit /&gt;&lt;/el-icon&gt;
		<el-icon :size="16">
			<Edit />
		</el-icon>
	</code>
	<br />
	<code>
		2、直接使用 &lt;Edit style="font-size: 16px; width: 16px; height: 16px;"/&gt;
		<Edit style="font-size: 16px; width: 16px; height: 16px" />
	</code>
	<p
		>iconify 示例：<el-link :underline="false" type="primary" target="_blank" href="https://icon-sets.iconify.design/"
			>官网</el-link
		></p
	>
	<code>
		1、使用 span 标签直接引入 &lt;span class="iconify" data-icon="material-symbols:10k-rounded"&gt;&lt;/span&gt;
		<span class="iconify" data-icon="material-symbols:home"></span>
	</code>
	<br />
	<code>
		2、使用 import 导入 import { Icon } from '@iconify/vue'; &lt;Icon icon="mdi-light:home"&gt;&lt;/Icon&gt;
		<Icon icon="mdi-light:home"></Icon>
	</code>
	<p>iconfont 示例 <el-link :underline="false" type="primary" target="_blank" href="https://www.iconfont.cn/">官网</el-link></p>
	<code>iconfont &lt;i class="iconfont icon-detail"&gt;&lt;/i&gt; <i class="iconfont icon-detail"></i></code>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { Icon } from "@iconify/vue";

	export default defineComponent({
		name: "Iconify",
		components: {
			Icon,
		},
		setup() {},
	});
</script>

<style scoped lang="scss"></style>
