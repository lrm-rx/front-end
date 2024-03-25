# 月份控件联动描述列表和日历

## 描述列表动态渲染

描述列表的结构完成后，配合逻辑更加完善的展示效果，代码如下：

```vue
// /src/views/Sign/Sign.vue
<template>
  <el-descriptions border direction="vertical" :column="9">
    <el-descriptions-item label="月份">{{ month }}月</el-descriptions-item>
    <el-descriptions-item v-for="value, key in DetailKey" :key="key" :label="value">
      {{ detailValue[key] }}
    </el-descriptions-item>
    <el-descriptions-item label="操作">
      <el-button type="primary" plain size="small" @click="handleToException">查看详情</el-button>
    </el-descriptions-item>
    <el-descriptions-item label="考勤状态">
      <el-tag :type="detailState.type" size="small">{{ detailState.text }}</el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>	
<script setup lang="ts">
enum DetailKey {
  normal = '正常出勤',
  absent = '旷工',
  miss = '漏打卡',
  late = '迟到',
  early = '早退',
  lateAndEarly = '迟到并早退'
}
const detailValue = reactive({
  normal: 0,
  absent: 0,
  miss: 0,
  late: 0,
  early: 0,
  lateAndEarly: 0
})
const detailState = reactive({
  type: 'success' as 'success' | 'danger',
  text: '正常' as '正常' | '异常'
})

</script>
```
