# 弹出框数据收集与添加审批

接下来就是我们的逻辑部分，代码如下：

```vue
// /src/views/Apply/Apply.vue
<script setup lang="ts">
import type {DateModelType, FormInstance, FormRules } from 'element-plus'
interface ApplyList {
  applicantid: string,
  applicantname: string,
  approverid: string,
  approvername: string,
  note: string,
  reason: string,
  time: [DateModelType, DateModelType]
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<ApplyList>({
  applicantid: '',
  applicantname: '',
  approverid: '',
  approvername: '',
  note: '',
  reason: '',
  time: ['', '']
})
const validatorTime = (rule: unknown, value: [DateModelType, DateModelType], callback: (arg?: Error)=> void) => {
  if( !value[0] && !value[1] ){
    callback(new Error('请选择审批时间'))
  }
  else{
    callback()
  }
}
const rules = reactive<FormRules>({
  approvername: [
    { required: true, message: '请选择审批人', trigger: 'blur' }
  ],
  reason: [
    { required: true, message: '请选择请假事由', trigger: 'blur' }
  ],
  time: [
    { validator: validatorTime, trigger: 'blur'  }
  ],
  note: [
    { required: true, message: '请添加审批备注', trigger: 'blur' }
  ]
})
const handleClose = () => {
  dialogVisible.value = false;
}
const handleOpen = () => {
  dialogVisible.value = true;
}
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      ruleForm.applicantid = usersInfos.value._id as string;
      ruleForm.applicantname = usersInfos.value.name as string;
      ruleForm.approverid = (approver.value.find((v)=> v.name === ruleForm.approvername) as {[index: string]: unknown})._id as string;
      ruleForm.time[0] = moment(ruleForm.time[0]).format('YYYY-MM-DD hh:mm:ss')
      ruleForm.time[1] = moment(ruleForm.time[1]).format('YYYY-MM-DD hh:mm:ss')
      store.dispatch('checks/postApply', ruleForm).then((res)=>{
        if(res.data.errcode === 0){
          store.dispatch('checks/getApply', { applicantid: usersInfos.value._id }).then((res)=>{
            if(res.data.errcode === 0){
              store.commit('checks/updateApplyList', res.data.rets)
            }
          })
          store.dispatch('news/putRemind', { userid: ruleForm.approverid, approver: true })
          ElMessage.success('添加审批成功')
          resetForm(ruleFormRef.value)
          handleClose()
        }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
```

状态管理和请求接口对应的代码：

```typescript
// /src/views/Apply/Apply.vue
const mutations: MutationTree<ChecksState> = {
  updateApplyList(state, payload){
    state.applyList = payload;
  },
  updateCheckList(state, payload){
    state.checkList = payload;
  }
};
const actions: ActionTree<ChecksState, State> = {
  getApply(context, payload){
    return http.get('/checks/apply', payload);
  },
  postApply(context, payload){
    return http.post('/checks/apply', payload);
  },
  putApply(context, payload){
    return http.put('/checks/apply', payload);
  }
};
```



