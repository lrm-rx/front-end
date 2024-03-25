# 完成登录功能及token持久化存储

## 完成登录功能

项目采用状态管理控制前后端接口通信，所以在`/store/modules/users.ts`实现对接登录的接口。

```typescript
// /store/modules/users.ts
import http from '@/utils/http';
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
export interface UsersState {
  token: string
}
const state: UsersState = {
  token: ''
};
const mutations: MutationTree<UsersState> = {
  updateToken(state, payload){
    state.token = payload;
  }
};
const actions: ActionTree<UsersState, State> = {
  login(context, payload){
    return http.post('/users/login', payload)
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

登录页submitForm方法，调用actions下的login方法，进行登录验证。

```vue
<script setup lang="ts">
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      store.dispatch('users/login', ruleForm).then((res)=>{
        if(res.data.errcode === 0){
          ElMessage.success('登录成功');
          store.commit('users/updateToken', res.data.token);
          router.push('/');
        }
        else{
          ElMessage.error('登录失败');
        }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
```

## token持久化存储

登录成功后，把返回的token进行持久化处理，上面代码中的`store.commit('users/updateToken', res.data.token);`就是要做这个事情，现在需要在`users.ts`中添加共享数据和持久化的代码。

```typescript
// /store/modules/users.ts
interface Infos {
  [index: string]: unknown
}
export interface UsersState {
  token: string
  infos: Infos
}
const state: UsersState = {
  token: '',
  infos: {}
};
const mutations: MutationTree<UsersState> = {
   updateInfos(state, payload){
   		state.infos = payload;
   } 
}
```

持久化配置在`/store/index.ts`中完成。

```typescript
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage,
  reducer: (state) => ({ users: { token: (state as StateAll).users.token } }),
})
export default createStore({
  ...,
  plugins: [vuexLocal.plugin]
})
```
