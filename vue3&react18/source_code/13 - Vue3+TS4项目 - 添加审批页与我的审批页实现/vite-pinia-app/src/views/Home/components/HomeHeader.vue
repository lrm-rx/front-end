<template>
  <div class="home-header">
    <span class="home-header-logo">
      <i class="iconfont icon-vue"></i>
      <i class="iconfont icon-icon-test"></i>
      <i class="iconfont icon-typescript"></i>
    </span>
    <span class="home-header-title">在线考勤系统</span>
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
    <el-dropdown>
      <el-space class="home-header-space">
        <el-avatar :src="(head as string)" /> {{ name }}
      </el-space>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/users';
import { useNewsStore } from '@/stores/news';
import { storeToRefs } from 'pinia';

const router = useRouter();
const usersStore = useUsersStore()
const newsStore = useNewsStore()
const { infos } = storeToRefs(usersStore)
const { info: newsInfo } = storeToRefs(newsStore)

const head = computed(()=> infos.value.head)
const name = computed(()=> infos.value.name)
const isDot = computed(()=> (newsInfo.value.applicant || newsInfo.value.approver) as boolean)

const handleLogout = () => {
  usersStore.clearToken()
  setTimeout(()=>{
    window.location.replace('/login')
  }, 500)
}
const handleNavigate = (path: string) => {
  router.push(path);
}
</script>

<style scoped lang="scss">
.home-header{
  font-size: 34px;
  display: flex;
  align-items: center;
  height: 100%;
  .home-header-logo {
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
    .home-header-title {
      margin-left: 30px;
      font-weight: 700;
      font-size: 18px;
      margin-right: auto;
    }
    .home-header-space{
      margin-left: 20px;
    }
}
</style>