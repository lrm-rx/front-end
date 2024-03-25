# 打卡签到页描述列表和日历布局

## 描述列表组件

描述列表组件，采用element plus中`<el-descriptions>`组件，地址：https://element-plus.org/zh-CN/component/descriptions.html

首先完成描述列表组件的基本布局，代码如下：

```vue
// /src/views/Sign/Sign.vue
<el-descriptions border direction="vertical" :column="9">
    <el-descriptions-item label="月份">1月</el-descriptions-item>
    <el-descriptions-item label="正常出勤">29</el-descriptions-item>
    <el-descriptions-item label="旷工">2</el-descriptions-item>
    ...
</el-descriptions>
```

## 日历组件

日历组件，采用element plus中`<el-calendar>`组件，地址：https://element-plus.org/zh-CN/component/calendar.html

首先完成日历的基本布局，以及头部的一个自定义实现，代码如下：

```vue
// /src/views/Sign/Sign.vue
<el-calendar v-model="date">
    <template #header>
      <el-button type="primary" @click="handlePutTime">在线签到</el-button>
      <el-space>
        <el-button plain>{{ year }}年</el-button>
        <el-select v-model="month" @change="handleChange">
          <el-option v-for="item in 12" :key="item" :value="item" :label="item + '月'" />
        </el-select>
      </el-space>
    </template>
    ...
</el-calendar>
<script setup lang="ts">
    import { ref } from 'vue'
    const date = ref(new Date())
    const year = data.value.getFullYear()
    const month = ref(data.value)
    const handleChange = () => {
  		date.value = new Date(`${year}.${month.value}`)
	}
</script>
```

