# Vuex状态管理如何使用TS

在安装脚手架的时候，可以选择自定义安装中，就会有状态管理的导入，这样在脚手架下就会有一个`/store/index.ts`这个状态管理的配置文件。

## 状态管理与TS

vuex中如何跟TS配合呢？实际上还是会比较复杂的，有如下步骤：

- 导出key：export const key: InjectionKey<Store<StateAll>> = Symbol()
- 导入key：app.use(store, key)
- 重写useStore：export function useStore () { return baseUseStore(key) } 

首先第一步先对我们的状态管理配置文件进行类型注解，代码如下：

```typescript
// store/index.ts
export interface State {
  count: number
}
export default createStore<State>({
  state: {
    count: 1
  }
})
```

为了让store.state能够有很好的提示效果，可以把一个key提供出去，并在main.ts中引入key值。

```typescript
// store/index.ts
import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
export const key: InjectionKey<Store<State>> = Symbol()
```

```type
// main.ts
import store, { key } from './store'
createApp(App).use(store, key).mount('#app')
```

最后一步就是对useStore进行改写，这样就可以利用到这个key给我们起到的一个提示作用。当我们再去使用useStore的时候就可以直接引入这个改造后的useStore了。

```typescript
import { useStore as baseUseStore } from 'vuex'
export function useStore () {
  return baseUseStore(key)
}
```

```vue
<script setup lang="ts">
import { useStore } from '@/store';
const store = useStore();
store.state.count
</script>
```

## 状态管理子模块中使用TS

在`/store/index.ts`中使用TS基本没有太大问题了，但是如何在子模块中也可以使用TS呢？首先了解一下vuex给我们提供的一些自带的类型。

- MutationTree -> mutation类型注解
- GetterTree -> getter类型注解
- ActionTree -> Action类型注解
- Store -> store对象的类型
- StoreOptions -> createStore参数类型

像`MutationTree `，`ActionTree`，`GetterTree `就是vuex提供的专门类型限定，同步方法、异步方法、计算属性的。所以我们可以直接去使用来控制状态管理的子模块。

```typescript
// store/modules/users.ts
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
export interface UsersState {
  username: string
  age: number
}
const state: UsersState = {
  username: 'xiaoming',
  age: 20
};
const mutations: MutationTree<UsersState> = {};
const actions: ActionTree<UsersState, State> = {};
const getters: GetterTree<UsersState, State> = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

下面是需要把子模块导出，跟主模块进行合并处理。

```typescript
// store/index.ts
import users from './modules/users'
import type { UsersState } from './modules/users'
export interface State {
  count: number
}
interface StateAll extends State {
  users: UsersState
}
export const key: InjectionKey<Store<StateAll>> = Symbol()
```



