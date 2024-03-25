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
    <template #date-cell="{ data }">
      <div>{{ renderDate(data.day) }}</div>
      <div class="show-time">{{ renderTime(data.day) }}</div>
    </template>
  </el-calendar>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { toZero } from '@/utils/common'
import { useUsersStore } from '@/stores/users';
import { useSignsStore } from '@/stores/signs';
import { storeToRefs } from 'pinia';

const router = useRouter()
const usersStore = useUsersStore()
const signsStore = useSignsStore()
const { infos: usersInfos } = storeToRefs(usersStore)
const { infos: signsInfos } = storeToRefs(signsStore)

const date = ref(new Date())
const year = date.value.getFullYear()
const month = ref(date.value.getMonth() + 1)

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

watchEffect((reset)=>{
  const detailMonth = ((signsInfos.value.detail as {[index: string]: unknown})[toZero(month.value)] as {[index: string]: unknown})
  for(const attr in detailMonth){
    switch( detailMonth[attr] ){
      case DetailKey.normal:
        detailValue.normal++
        break
      case DetailKey.absent:
        detailValue.absent++
        break
      case DetailKey.miss:
        detailValue.miss++
        break
      case DetailKey.late:
        detailValue.late++
        break
      case DetailKey.early:
        detailValue.early++
        break
      case DetailKey.lateAndEarly:
        detailValue.lateAndEarly++
        break
    }
  }
  for(const attr in detailValue){
    if( attr !== 'normal' && detailValue[attr as keyof typeof detailValue] !== 0){
      detailState.type = 'danger'
      detailState.text = '异常'
    }
  }
  reset(()=>{
    detailState.type = 'success'
    detailState.text = '正常'
    for(const attr in detailValue){
      detailValue[attr as keyof typeof detailValue] = 0
    }
  })
})

const handleChange = () => {
  date.value = new Date(`${year}.${month.value}`)
}
const handleToException = () => {
  router.push({
    path: '/exception',
    query: { month: month.value }
  });
}
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
const handlePutTime = () => {
  signsStore.putTimeAction({userid: usersInfos.value._id}).then((res)=>{
    if(res.data.errcode === 0){
      signsStore.updateInfos(res.data.infos) 
      ElMessage.success('签到成功')
    }
  })
}
</script>

<style scoped lang="scss">
.el-descriptions{
  margin: 10px;
}
.el-select{
  width: 80px;
}
.show-time{
  text-align: center;
  line-height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>