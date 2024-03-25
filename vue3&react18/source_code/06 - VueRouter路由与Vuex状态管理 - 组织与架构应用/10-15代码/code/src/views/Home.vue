<template>
  <div>
    <button @click="change(5)">点击</button>
    hello home, {{ count }}, {{ doubleCount }}
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
    name: 'HomeView',
    methods: {
      //handleClick(){
        //this.$store.commit('change');
        //this.$store.dispatch('change', 5);
      //}
      ...mapActions(['change'])
    },
    computed: {
      /* count(){
        return this.$store.state.count
      },
      doubleCount(){
        return this.$store.getters.doubleCount;
      } */
      ...mapState(['count']),
      ...mapGetters(['doubleCount'])
    }
  }
</script>

<style scoped>

</style>