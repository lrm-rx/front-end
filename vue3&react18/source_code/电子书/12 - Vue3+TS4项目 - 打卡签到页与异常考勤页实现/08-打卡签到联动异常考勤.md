# 打卡签到联动异常考勤

点击签到页中`Sign.vue`的查看详情按钮，通过query方式携带数据。

```vue
// /src/views/Sign/Sign.vue
<template>
  <el-button type="primary" plain size="small" @click="handleToException">查看详情</el-button>
</template>
<script setup lang="ts">
const handleToException = () => {
  router.push({
    path: '/exception',
    query: { month: month.value }
  });
}
</script>
```

进入异常考勤页`Exception.vue`后，通过路由获取。

```vue
// /src/views/Exception/Exception.vue
<template>
  <el-select v-model="month">
     <el-option v-for="item in 12" :key="item" :value="item" :label="item + '月'" />
  </el-select>
</template>
<script setup lang="ts">
const month = ref( Number(route.query.month) || date.getMonth() + 1 )
watch(month, ()=>{
  router.push({
    query: { month: month.value }
  });
})
</script>
```
