# 日历数据渲染与在线打卡签到

## 日历数据渲染

后端接口`/signs/time`获取数据后，需要把打卡信息渲染到日历中，具体如下：

```vue
// /src/views/Sign/Sign.vue
<el-calendar v-model="date">
    <template #header>
      <el-space>
        <el-button plain>{{ year }}年</el-button>
        <el-select v-model="month" @change="handleChange">
          <el-option v-for="item in 12" :key="item" :value="item" :label="item + '月'" />
        </el-select>
      </el-space>
    </template>
    <template #dateCell="{ data }">
      <div>{{ renderDate(data.day) }}</div>
      <div class="show-time">{{ renderTime(data.day) }}</div>
    </template>
</el-calendar>
<script setup lang="ts">
const renderDate = (day: string) => {
  return day.split('-')[2];
}
const renderTime = (day: string) => {
  const [, month, date] = day.split('-');
  const ret = ((signsInfos.value.time as {[index: string]: unknown})[month] as {[index: string]: unknown})[date];
  if( Array.isArray(ret) ){
    return ret.join('-')
  }
}
</script>
```

## 在线打卡签到

下一小节来看一下如何挂载请求头。

```vue
// /src/views/Sign/Sign.vue
<el-calendar v-model="date">
    <template #header>
      <el-button type="primary" @click="handlePutTime">在线签到</el-button>
    </template>
</el-calendar>
<script setup lang="ts">
const handlePutTime = () => {
  store.dispatch('signs/putTime', {userid: usersInfos.value._id}).then((res)=>{
    if(res.data.errcode === 0){
      store.commit('signs/updateInfos', res.data.infos);
      ElMessage.success('签到成功')
    }
  })
}
</script>
```



