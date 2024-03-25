# 架构项目状态管理系统及对应模块


## 统一接口处理方案

由于接口比较多，所以需要在项目中对接口做一些统一的处理方式，需要对接口调用进行架构。常见方式如下：

- 普通模式接口的统一处理：/src/api/users.ts …
- 状态管理模式接口的统一处理：/store/modules/users.ts …

普通的模式会比较简单，只需要对接口进行分类就可以了。而状态管理方式会比较复杂一些，但是好处也是明显的，比如多个页面之间要共享数据，就可以减少请求的次数，还有就是对数据持久化也比较方便有现成的插件。

## 对应模块

所以我们的这个项目采用的就是第二种利用状态管理来架构前后端接口的调用方式。具体划分如下：

- /store/modules/users.ts -> 用户处理
- /store/modules/signs.ts -> 签到处理
- /store/modules/checks.ts -> 审批处理
- /store/modules/news.ts -> 消息处理

```typescript
// /store/modules/users.ts
import http from '@/utils/http';
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
export interface UsersState {
}
const state: UsersState = {
};
const mutations: MutationTree<UsersState> = {
};
const actions: ActionTree<UsersState, State> = {
  login(){
    return http.post('/users/login')
  }
};
const getters: GetterTree<UsersState, State> = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

其他模块跟users模块语法类型，这里不再赘述。下面看一下`/store/index.ts`的配置。

```typescript
import { createStore, useStore as baseUseStore } from 'vuex'
import type { Store } from 'vuex'
import users from './modules/users'
import signs from './modules/signs'
import checks from './modules/checks'
import news from './modules/news'
import type { UsersState } from './modules/users'
import type { SignsState } from './modules/signs'
import type { ChecksState } from './modules/checks'
import type { NewsState } from './modules/news'
import type { InjectionKey } from 'vue'
export interface State {
}
export interface StateAll extends State {
  users: UsersState,
  signs: SignsState,
  checks: ChecksState,
  news: NewsState
}
export const key: InjectionKey<Store<StateAll>> = Symbol()
export function useStore () {
  return baseUseStore(key)
}
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    signs,
    checks,
    news
  }
})
```

最后对接口`login`进行一下测试，看看整个架构是否有问题。

```vue
<script setup lang="ts">
import { useStore } from '@/store';
const store = useStore();
store.dispatch('users/login').then((res)=>{
  console.log( res.data );
})
</script>
```

