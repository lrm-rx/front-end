# 项目优化 - Vite+Pinia 对项目进行改造

利用Vite + Pinia进行项目的改造，首先先安装脚手架Vite

```shel
$ npm create vite@latest
```

选择自定义配置，并选择ts + pinia 的组合。接下来主要就是对vuex编写的代码，改造成pinia相关的代码。

修改的状态管理的模块如下：

- /stores/users.ts
- /stores/signs.ts
- /stores/news.ts
- /stores/checks.ts

```typescript
// /stores/users.ts
import http from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
type Token = string
type Infos = {
  [index: string]: unknown
}
type Login = {
  email: string
  pass: string
  [index: string]: unknown
}
export const useUsersStore = defineStore('users', () => {
  const token = ref<Token>('')
  const infos = ref<Infos>({})
  function loginAction(payload: Login) {
    return http.post('/users/login', payload)
  }
  function infosAction(){
    return http.get('/users/infos')
  }
  function updateToken(payload: Token){
    token.value = payload;
  }
  function updateInfos(payload: Infos){
    infos.value = payload;
  }
  function clearToken(){
    token.value = '';
  }
  return { 
    token, 
    infos, 
    loginAction, 
    infosAction,
    updateToken,
    updateInfos,
    clearToken 
  }
}, {
  persist: {    //  pinia的持久化处理，第三方模块：pinia-plugin-persistedstate
    paths: ['token']
  }
})

```

```typescript
// /stores/signs.ts
import http from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
type GetTime = {
  userid: unknown
}
type PutTime = {
  userid: unknown
}
type Infos = {
  [index: string]: unknown
}
export const useSignsStore = defineStore('signs', () => {
  const infos = ref<Infos>({})
  function getTimeAction(payload: GetTime){
    return http.get('/signs/time', payload);
  }
  function putTimeAction(payload: PutTime){
    return http.put('/signs/time', payload);
  }
  function updateInfos(payload: Infos){
    infos.value = payload;
  }
  return { 
    infos,
    getTimeAction,
    putTimeAction,
    updateInfos
  }
})

```

```typescript
// /stores/news.ts
import http from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
type GetRemind = {
  userid: unknown
}
type PutRemind = {
  userid: unknown
  approver?: boolean
  applicant?: boolean
}
type Info = {
  [index: string]: unknown
}
export const useNewsStore = defineStore('news', () => {
  const info = ref<Info>({})
  function getRemindAction(payload: GetRemind){
    return http.get('news/remind', payload)
  }
  function putRemindAction(payload: PutRemind){
    return http.put('news/remind', payload)
  }
  function updateInfo(payload: Info){
    info.value = payload
  }
  return {
    info,
    getRemindAction,
    putRemindAction,
    updateInfo
  }
})

```

```typescript
// /stores/checks.ts
import http from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DateModelType } from 'element-plus'
type GetApply = {
  applicantid?: unknown
  approverid?: unknown
}
export type PostApply = {
  applicantid: string,
  applicantname: string,
  approverid: string,
  approvername: string,
  note: string,
  reason: string,
  time: [DateModelType, DateModelType]
}
type PutApply = {
  _id: string 
  state: '已通过' | '未通过'
}
type Infos = {
  [index: string]: unknown
}
export const useChecksStore = defineStore('checks', () => {
  const applyList = ref<Infos[]>([])
  const checkList = ref<Infos[]>([])
  function getApplyAction(payload: GetApply){
    return http.get('/checks/apply', payload);
  }
  function postApplyAction(payload: PostApply){
    return http.post('/checks/apply', payload);
  }
  function putApplyAction(payload: PutApply){
    return http.put('/checks/apply', payload);
  }
  function updateApplyList(payload: Infos[]){
    applyList.value = payload;
  }
  function updateCheckList(payload: Infos[]){
    checkList.value = payload;
  }
  return {
    applyList,
    checkList,
    getApplyAction,
    postApplyAction,
    putApplyAction,
    updateApplyList,
    updateCheckList
  }
})

```



