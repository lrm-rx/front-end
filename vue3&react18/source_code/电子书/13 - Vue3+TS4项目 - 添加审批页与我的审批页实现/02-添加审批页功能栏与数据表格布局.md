# 添加审批页功能栏与数据表格布局

## 审批页功能栏

主要用到，按钮组件，输入框组件，单选按钮组组件，代码如下：

```vue
// /src/views/Apply/Apply.vue
 <div class="apply-title">
    <el-button type="primary" @click="handleOpen">添加审批</el-button>
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

## 数据表格组件

数据表格组件，采用element plus中`<el-table>`组件，地址：https://element-plus.gitee.io/zh-CN/component/table.html

首先完成表格组件的基本布局，代码如下：

```vue
// /src/views/Apply/Apply.vue
 <div class="apply-table">
    <el-table :data="applyList" border>
      <el-table-column prop="applicantname" label="申请人" width="180" />
      <el-table-column prop="reason" label="审批事由" width="180" />
      <el-table-column prop="time" label="时间">
        <template #default="scope">
          {{ scope.row.time.join(' - ') }}
        </template>
      </el-table-column>
      <el-table-column prop="note" label="备注" />
      <el-table-column prop="approvername" label="审批人" width="180" />
      <el-table-column prop="state" label="状态" width="180" />
    </el-table>
  </div>
```

## 渲染初始数据到表格组件

首先编写对应的状态管理，并调用响应的接口

```typescript
// /src/store/modules/checks.ts
import http from '@/utils/http';
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
interface Infos {
  [index: string]: unknown
}
export interface ChecksState {
  applyList: Infos[],
  checkList: Infos[]
}
const state: ChecksState = {
  applyList: [],
  checkList: []
};
const mutations: MutationTree<ChecksState> = {
  updateApplyList(state, payload){
    state.applyList = payload;
  }
};
const actions: ActionTree<ChecksState, State> = {
  getApply(context, payload){
    return http.get('/checks/apply', payload);
  }
};
const getters: GetterTree<ChecksState, State> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

调用编写好的接口，并进行数据渲染。

```vue
// /src/views/Apply/Apply.vue
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
const store = useStore()
const applyList = computed(()=> store.state.checks.applyList)
</script>
```

