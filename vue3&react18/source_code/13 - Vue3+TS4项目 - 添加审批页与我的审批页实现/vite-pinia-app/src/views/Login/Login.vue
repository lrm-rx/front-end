<template>
  <div class="login">
    <div class="header">
      <span class="header-logo">
        <i class="iconfont icon-vue"></i>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-typescript"></i>
      </span>
      <span class="header-title">在线考勤系统</span>
    </div>
    <div class="desc">
      零基础从入门到进阶，系统掌握前端三大热门技术(Vue、React、TypeScript)
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="main"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="ruleForm.email"
          type="text"
          placeholder="请输入邮箱"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
          auto-insert-space
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div class="users">
      <el-row :gutter="20">
        <el-col v-for="item in testUsers" :key="item.email" :span="12">
          <h3>
            测试账号，<el-button @click="autoLogin({email: item.email, pass: item.pass})">一键登录</el-button>
          </h3>
          <p>邮箱：{{ item.email }}</p>
          <p>密码：{{ item.pass }}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/users'

const router = useRouter();
const usersStore = useUsersStore()

interface User {
  email: string
  pass: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<User>({
  email: '',
  pass: '',
})
const rules = reactive<FormRules>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
  ],
  pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const testUsers: User[] = [
  {
    email: 'huangrong@imooc.com',
    pass: 'huangrong'
  },
  {
    email: 'hongqigong@imooc.com',
    pass: 'hongqigong'
  }
];

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      usersStore.loginAction(ruleForm).then((res)=>{
        if(res.data.errcode === 0){
          usersStore.updateToken(res.data.token);
          ElMessage.success('登录成功');
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
const autoLogin = (user: User) => {
  ruleForm.email = user.email;
  ruleForm.pass = user.pass;
  submitForm(ruleFormRef.value);
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/login-bg.svg') no-repeat center 110px;
  background-size: 100%;
  .header {
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    padding-top: 100px;
    .header-logo {
      .icon-vue,
      .icon-icon-test,
      .icon-typescript {
        margin-right: 5px;
        font-size: inherit;
      }
      .icon-vue {
        color: green;
      }
      .icon-icon-test {
        color: #deb887;
      }
      .icon-typescript {
        color: blue;
      }
    }
    .header-title {
      margin-left: 30px;
      font-weight: 700;
      font-size: 30px;
    }
  }
  .desc {
    text-align: center;
    padding-top: 30px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
  }
  .main {
    width: 500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .users{
    width: 500px;
    margin: 60px auto;
    color: rgba(0,0,0,.65);
    h3{
      font-size: 16px;
    }
    p{
      margin: 20px;
    }
  }
}
</style>
