# 异常考勤页时间线布局

## 时间线组件与空状态组件

时间线组件，采用element plus中`<el-timeline>`组件，地址：https://element-plus.org/zh-CN/component/timeline.html

空状态组件，采用element plus中`<el-empty>`组件，地址：https://element-plus.org/zh-CN/component/empty.html

首先完成`Exception.vue`页的基本布局，代码如下：

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
        <el-timeline-item timestamp="2022/10/2" placement="top">
          <el-card>
            <el-space>
              <h4>旷工</h4>
              <p>考勤详情：暂无打卡记录</p>
            </el-space>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/10/2" placement="top">
          <el-card>
            <el-space>
              <h4>旷工</h4>
              <p>考勤详情：暂无打卡记录</p>
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

