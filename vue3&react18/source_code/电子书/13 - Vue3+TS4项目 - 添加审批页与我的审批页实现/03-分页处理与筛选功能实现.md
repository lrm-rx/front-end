# 分页处理与筛选功能实现

## 分页组件

分页组件，采用element plus中`<el-pagination>`组件，地址：https://element-plus.gitee.io/zh-CN/component/pagination.html

```vue
// /src/views/Apply/Apply.vue
 <div class="apply-table">
    ...
    <el-pagination small background layout="prev, pager, next" :total="applyList.length" :page-size="pageSize" @current-change="handleChange" />
 </div>
<style scoped lang="scss">
.apply-table{
  margin: 10px;
  .el-pagination{
    float: right;
    margin: 10px;
  }
}
</style>
```

完成分页的逻辑处理，代码如下：

```vue
// /src/views/Apply/Apply.vue
<script setup lang="ts">
const pageSize = ref(2)
const pageCurrent = ref(1)
const pageApplyList = computed(()=> applyList.value.slice((pageCurrent.value - 1)*pageSize.value, pageCurrent.value*pageSize.value))
const handleChange = (value: number) => {
  pageCurrent.value = value;
}
</script>
```

## 功能栏筛选功能

需要对applyList数据进行筛选操作，代码如下：

```vue
// /src/views/Apply/Apply.vue
<script setup lang="ts">
const defaultType = '全部'
const approverType = ref(defaultType)
const searchWord = ref('')
const applyList = computed(()=> store.state.checks.applyList.filter((v)=> (v.state === approverType.value || defaultType === approverType.value) && (v.note as string).includes(searchWord.value))) 
</script>
```

最终效果

<div align=center>
    <img src="./img/13-01-添加考勤审批表格与分页.png" />
    <div>添加考勤审批表格与分页</div>
</div>
