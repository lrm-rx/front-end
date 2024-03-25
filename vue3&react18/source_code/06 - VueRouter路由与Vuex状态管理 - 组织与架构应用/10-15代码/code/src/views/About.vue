<template>
  <div>
    <button @click="change('hi')">点击</button>
    hello about, {{ msg }}, {{ upperMsg }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
  export default {
    name: 'AboutView',
    methods: {
      // handleClick(){
      //   this.$store.commit('message/change', 'hi');
      // }
      ...mapMutations('message', ['change'])
    },
    computed: {
      ...mapState('message', ['msg']),
      ...mapGetters('message', ['upperMsg'])
    }
  }
</script>

<style scoped>

</style>