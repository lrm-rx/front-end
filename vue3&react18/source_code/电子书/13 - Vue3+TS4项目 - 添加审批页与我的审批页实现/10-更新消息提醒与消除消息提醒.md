# 更新消息提醒与消除消息提醒

本小节完成消除消息提醒功能，当进入到我的考勤审批页或添加考勤审批页的时候，就会触发消息提醒数据的变化，主要就是在对应的路由守卫中进行完成。

```typescript
// src/router/index.ts
const newsInfo = (store.state as StateAll).news.info;
if( newsInfo.applicant ){
    const res = await store.dispatch('news/putRemind', { userid: usersInfos._id, applicant: false })
    if(res.data.errcode === 0){
        store.commit('news/updateInfo', res.data.info)
    }
    else{
        return;
    }
}
```

在我的考勤审批页或添加考勤审批页中进行操作的时候，就会触发更新消息提醒的功能。

```vue
// /src/views/Apply/Apply.vue
<script setup lang="ts">
const submitForm = (formEl: FormInstance | undefined) => {
    store.dispatch('checks/postApply', ruleForm).then((res)=>{
        store.dispatch('news/putRemind', { userid: ruleForm.approverid, approver: true })
    })
}
</script>

// /src/views/Check/Check.vue
<script setup lang="ts">
const handlePutApply = (_id: string, state: '已通过' | '未通过', applicantid: string) => {
    store.dispatch('checks/putApply', {_id, state}).then((res)=>{
        store.dispatch('news/putRemind', { userid: applicantid, applicant: true })
    })
}
</script>
```

