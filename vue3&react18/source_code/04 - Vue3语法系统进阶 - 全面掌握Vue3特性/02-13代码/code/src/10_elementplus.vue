<template>
  <div>
    <h2>element plus</h2>
    <el-button @click="handleClick" type="primary" icon="Clock">Primary</el-button>
    <el-button @click="handleClick2" type="success">Success</el-button>
    <el-rate v-model="value1" />
    <el-icon><Clock /></el-icon>
  </div>
</template>

<script>
  import { ElMessage, ElNotification } from 'element-plus';
  export default {
    data(){
      return {
        value1: 3
      }
    },
    mounted(){
      setTimeout(()=>{
        this.value1 = 5;
      }, 2000)
    },
    methods: {
      handleClick(){
        ElMessage.success('提示成功的消息');
      },
      handleClick2(){
        ElNotification({
          title: '邮件',
          message: '您今日的消费记录'
        });
      }
    }
  }
</script>

<style scoped>

</style>