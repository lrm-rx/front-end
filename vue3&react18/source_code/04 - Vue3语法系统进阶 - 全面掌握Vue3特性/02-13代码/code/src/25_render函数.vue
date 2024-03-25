<!-- <template>
  <div>
    <h2>render</h2>
  </div>
</template> -->

<script>
  import { h } from 'vue';
  export default {
    render(){
      return h('div', h('h2', 'render2'))
    }  
  }
</script>

<style scoped>

</style>