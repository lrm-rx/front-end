# 时间线数据渲染与交互功能实现

本小节是异常考勤页`Exception.vue`的最终效果，会完整代码粘出来。主要利用的就是获取考勤详情，signs.infos.detail和获取考勤时间，signs.infos.time。

```vue
// /src/views/Exception/Exception.vue
<template>
  <div class="exception-title">
    <el-button type="primary" @click="handleToApply">异常处理</el-button>
    <el-space>
      <el-button plain>{{ year }}年</el-button>
      <el-select v-model="month">
        <el-option v-for="item in 12" :key="item" :value="item" :label="item + '月'" />
      </el-select>
    </el-space>
  </div>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-empty v-if="false" description="暂无异常考勤" />
      <el-timeline v-else>
        <el-timeline-item v-for="item in detailMonth" :key="item[0]" :timestamp="year + '/' + month + '/' + item[0]" placement="top">
          <el-card>
            <el-space>
              <h4>{{ item[1] }}</h4>
              <p>考勤详情：{{ renderTime(item[0]) }}</p>
            </el-space>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <el-col :span="12">
      <el-empty v-if="false" description="暂无申请审批" />
      <el-timeline v-else>
        <el-timeline-item timestamp="事假" placement="top">
          <el-card>
            <h4>已通过</h4>
            <p class="apply-info">申请日期 2022-10-01 12:00:00 - 2022-11-08 12:00:00</p>
            <p class="apply-info">申请详情 123</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="事假" placement="top">
          <el-card>
            <h4>已通过</h4>
            <p class="apply-info">申请日期 2022-10-01 12:00:00 - 2022-11-08 12:00:00</p>
            <p class="apply-info">申请详情 123</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { toZero } from '@/utils/common'

const route = useRoute()
const router = useRouter()
const store = useStore()

const signsInfos = computed(() => store.state.signs.infos)

const date = new Date();
const year = date.getFullYear();
const month = ref( Number(route.query.month) || date.getMonth() + 1 )

const ret = ((signsInfos.value.detail as {[index: string]: unknown})[toZero(month.value)] as {[index: string]: unknown})
const detailMonth = computed(() => Object.entries(ret).filter((v)=> v[1] !== '正常出勤').sort())

watch(month, ()=>{
  router.push({
    query: { month: month.value }
  });
})

const handleToApply = () => {
  router.push('/apply');
}

const renderTime = (date: string) => {
  const ret = ((signsInfos.value.time as {[index: string]: unknown})[toZero(month.value)] as {[index: string]: unknown})[date];
  if( Array.isArray(ret) ){
    return ret.join('-');
  }
  else{
    return '暂无打卡记录';
  }
}

</script>

<style scoped lang="scss">
.exception-title{
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
.el-select{
  width: 80px;
}
.el-timeline{
  margin: 10px;
}
.apply-info{
  margin: 10px;
}
</style>
```

独享路由守卫，代码如下：

```ts
// /src/router/index.ts
	{
        path: 'exception',
        name: 'exception',
        component: Exception,
        meta: {
          menu: true,
          title: '异常考勤查询',
          icon: 'warning',
          auth: true,
        },
        beforeEnter(to, from, next){
          const usersInfos = (store.state as StateAll).users.infos;
          const signsInfos = (store.state as StateAll).signs.infos;
          if( _.isEmpty(signsInfos) ){
            store.dispatch('signs/getTime', { userid: usersInfos._id }).then((res)=>{
              if(res.data.errcode === 0){
                store.commit('signs/updateInfos', res.data.infos)
                next()
              }
            })
          }
          else{
            next()
          }
        }
      }
```

