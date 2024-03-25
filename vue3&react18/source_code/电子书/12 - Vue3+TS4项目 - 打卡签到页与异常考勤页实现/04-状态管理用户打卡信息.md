# 状态管理用户打卡信息

## 获取打卡信息

打卡信息通过状态管理进行获取，并存储到状态管理中进行共享，并且进行缓存。具体实施方案如下：

```typescript
// /src/store/modules/signs.ts
import http from '@/utils/http';
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
interface Infos {
  [index: string]: unknown
}
export interface SignsState {
  infos: Infos
}
const state: SignsState = {
  infos: {}
};
const mutations: MutationTree<SignsState> = {
  updateInfos(state, payload){
    state.infos = payload;
  }
};
const actions: ActionTree<SignsState, State> = {
  getTime(context, payload){
    return http.get('/signs/time', payload);
  },
  putTime(context, payload){
    return http.put('/signs/time', payload);
  }
};
const getters: GetterTree<SignsState, State> = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

在独享守卫中发起请求，代码如下：

```typescript
// /src/router/index.ts
	{
        path: 'sign',
        name: 'sign',
        component: Sign,
        meta: {
          menu: true,
          title: '在线打卡签到',
          icon: 'calendar',
          auth: true
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
```

这样在`Sign.vue`中就可以拿到初始的数据了，代码如下：

```vue
// /src/views/Sign/Sign.vue
<script setup lang="ts">
const signsInfos = computed(()=> store.state.signs.infos)
</script>
```

