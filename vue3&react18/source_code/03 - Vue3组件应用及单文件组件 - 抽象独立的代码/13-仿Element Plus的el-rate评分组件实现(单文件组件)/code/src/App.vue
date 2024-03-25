<template>
  <h2>hello vue</h2>
  <el-rate v-model="value1"></el-rate>{{ value1 }}
  <el-rate :max="6" v-model="value2"></el-rate>{{ value2 }}
</template>

<script>
import ElRateVue from './components/ElRate.vue'
export default {
  name: 'App',
  data(){
    return {
      value1: 0,
      value2: 3
    }
  },
  components: {
    ElRate: ElRateVue
  }
}
</script>

<style>

</style>
