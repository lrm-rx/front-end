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
      <el-empty v-if="detailMonth.length === 0" description="暂无异常考勤" />
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
      <el-empty v-if="applyListMonth.length === 0" description="暂无申请审批" />
      <el-timeline v-else>
        <el-timeline-item v-for="item in applyListMonth" :key="(item._id as string)" :timestamp="(item.reason as string)" placement="top">
          <el-card>
            <h4>{{ item.state }}</h4>
            <p class="apply-info">申请日期 {{ (item.time as string[])[0] }} - {{ (item.time as string[])[1] }}</p>
            <p class="apply-info">申请详情 {{ item.note }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toZero } from '@/utils/common'
import { useSignsStore } from '@/stores/signs'
import { useChecksStore } from '@/stores/checks'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()

const signsStore = useSignsStore()
const checksStore = useChecksStore()
const { infos: signsInfos } = storeToRefs(signsStore)
const { applyList } = storeToRefs(checksStore)

const date = new Date();
const year = date.getFullYear();
const month = ref( Number(route.query.month) || date.getMonth() + 1 )

const applyListMonth = computed(() => applyList.value.filter((v) => {
  const startTime = (v.time as string[])[0].split(' ')[0].split('-');
  const endTime = (v.time as string[])[1].split(' ')[0].split('-');
  return startTime[1] <= toZero(month.value) && endTime[1] >= toZero(month.value)
}))

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