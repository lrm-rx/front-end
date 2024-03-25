# 收集登录数据及表单验证功能

## 收集登录数据

在`el-form`组件上，有一个`:model`属性，用于收集表单数据操作，具体代码如下：

```vue
<!-- /src/views/Login/Login.vue -->
<template>
	<el-form :model="ruleForm">
        <el-form-item label="邮箱" prop="email">
    		<el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" />
        </el-form-item>
	</el-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
interface User {
  email: string
  pass: string
}
const ruleForm = reactive<User>({
  email: '',
  pass: '',
})
</script>
```

## 表单验证功能

可以通过`el-form`组件的`:rules`属性来设置表单验证功能。

```vue
<!-- /src/views/Login/Login.vue -->
<template>
	<el-form :model="ruleForm" :rules="rules">
        <el-form-item label="邮箱" prop="email">
    		<el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" />
        </el-form-item>
	</el-form>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
  ],
  pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
</script>
```

点击登录按钮，触发登录方法，代码如下：

```vue
<!-- /src/views/Login/Login.vue -->
<template>
<el-form-item>
    <el-button type="primary" @click="submitForm(ruleFormRef)" auto-insert-space>登录</el-button>
</el-form-item>
</template>
<script setup lang="ts">
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(ruleForm)
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
```
