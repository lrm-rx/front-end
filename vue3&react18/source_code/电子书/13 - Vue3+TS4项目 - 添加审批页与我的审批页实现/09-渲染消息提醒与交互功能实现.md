# 渲染消息提醒与交互功能实现

本小节要完成消息提醒功能，首先需要进行布局实现，改动的页面为，`/src/views/Home/components/HomeHeader.vue`，代码如下：

```vue
// /src/views/Home/Exception.vue
<template>
  	<el-dropdown>
      <el-badge :is-dot="isDot">
        <el-icon :size="20"><Bell /></el-icon>
      </el-badge>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleNavigate('/apply')" v-if="newsInfo.applicant">有审批结果消息</el-dropdown-item>
          <el-dropdown-item @click="handleNavigate('/check')" v-if="newsInfo.approver">有审批请求消息</el-dropdown-item>
          <el-dropdown-item v-if="!newsInfo.applicant && !newsInfo.approver">暂无消息</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>
```

需要对应的状态管理页面，即：`/src/store/modules/news.ts`

```ts
// /src/store/modules/news.ts
import http from '@/utils/http';
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
interface Info {
  [index: string]: unknown
}
export interface NewsState {
  info: Info
}
const state: NewsState = {
  info: {}
};
const mutations: MutationTree<NewsState> = {
  updateInfo(state, payload){
    state.info = payload
  }
};
const actions: ActionTree<NewsState, State> = {
  getRemind(context, payload){
    return http.get('news/remind', payload)
  },
  putRemind(context, payload){
    return http.put('news/remind', payload)
  }
};
const getters: GetterTree<NewsState, State> = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

接下来就是调用这个接口，并完成逻辑的部分

```typescript
// src/router/index.ts，路由守卫获取初始数据
const newsInfo = (store.state as StateAll).news.info;
if( _.isEmpty(newsInfo) ){
    const res = await store.dispatch('news/getRemind', { userid: usersInfos._id })
    if(res.data.errcode === 0){
        store.commit('news/updateInfo', res.data.info)
    }
    else{
        return;
    }
}
```

```vue
// /src/views/Home/Exception.vue，页面实现逻辑
<script setup lang="ts">
const newsInfo = computed(()=> store.state.news.info)
const isDot = computed(()=> (newsInfo.value.applicant || newsInfo.value.approver) as boolean)
</script>
```

