<template>
  <h2>任务列表</h2>
  <div>
    <input v-model="msg" type="text"><button @click="handleAdd">添加</button>
  </div>
  <router-link to="/todo">所有任务</router-link> | 
  <router-link to="/complete">已完成任务</router-link> |
  <router-link to="/incomplete">未完成任务</router-link> 
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

let store = useStore();
let msg = ref('');

let handleAdd = () => {
  store.commit('add', msg.value)
  msg.value = '';
}

</script>

<style>
.router-link-active{
  background: red;
  color: white;
}
.through{
  text-decoration: line-through;
}
</style>
