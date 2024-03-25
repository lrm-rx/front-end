# 我的审批页功能栏与数据表格布局

## 我的审批页功能栏

功能栏，主要是按钮，输入框，单选按钮组等组件，布局如下：

```vue
// /src/views/Check/Check.vue
  <div class="check-title">
    <el-space>
      <el-input v-model="searchWord" placeholder="请输入搜索关键词" />
      <el-button type="primary" icon="search">搜索</el-button>
      <el-divider direction="vertical"></el-divider>
      <el-radio-group v-model="approverType">
        <el-radio-button label="全部" />
        <el-radio-button label="待审批" />
        <el-radio-button label="已通过" />
        <el-radio-button label="未通过" />
      </el-radio-group>
    </el-space>
  </div>
```

## 数据表格布局

数据表格组件，采用element plus中`<el-table>`组件，地址：https://element-plus.gitee.io/zh-CN/component/table.html

```vue
// /src/views/Check/Check.vue	
	<el-table :data="checkList" border>
      <el-table-column prop="applicantname" label="申请人" width="180" />
      <el-table-column prop="reason" label="审批事由" width="180" />
      <el-table-column prop="time" label="时间">
        <template #default="scope">
          {{ scope.row.time.join(' - ') }}
        </template>
      </el-table-column>
      <el-table-column prop="note" label="备注" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button @click="handlePutApply(scope.row._id, '已通过', scope.row.applicantid)" type="success" icon="check" size="small" circle></el-button>
          <el-button @click="handlePutApply(scope.row._id, '未通过', scope.row.applicantid)" type="danger" icon="close" size="small" circle></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态" width="180" />
    </el-table>
```

初始数据的渲染，需要在对应Check路由的独享守卫中完成：

```typescript
// /src/router/index.ts	
	{
        path: 'check',
        name: 'check',
        component: Check,
        meta: {
          menu: true,
          title: '我的考勤审批',
          icon: 'finished',
          auth: true,
        },
        async beforeEnter(to, from, next){
          const usersInfos = (store.state as StateAll).users.infos;
          const checksCheckList = (store.state as StateAll).checks.checkList;
          const newsInfo = (store.state as StateAll).news.info;
          if( _.isEmpty(checksCheckList) ){
            const res = await store.dispatch('checks/getApply', { approverid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('checks/updateCheckList', res.data.rets)
            }
            else{
              return;
            }
          }
          if( newsInfo.approver ){
            const res = await store.dispatch('news/putRemind', { userid: usersInfos._id, approver: false })
            if(res.data.errcode === 0){
              store.commit('news/updateInfo', res.data.info)
            }
            else{
              return;
            }
          }
          next()
        }
      }
```

在/Check/Check.vue页面中，渲染初始数据

```vue
<script setup lang="ts">
const checkList = computed(() => store.state.checks.checkList)
</script>
```

