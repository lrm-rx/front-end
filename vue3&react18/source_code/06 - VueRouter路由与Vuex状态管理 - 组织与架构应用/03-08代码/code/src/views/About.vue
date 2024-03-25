<template>
  <div>
    hello about
    <!-- <div>
      <router-link to="/about/foo/123">Foo 123</router-link> | 
      <router-link to="/about/foo/456">Foo 456</router-link>
    </div> -->
    <!-- <div>
      <router-link to="/about/foo/123" custom v-slot="{navigate}">
        <button @click="navigate">Foo 123</button>
      </router-link> | 
      <router-link to="/about/foo/456" custom v-slot="{navigate}">
        <button @click="navigate">Foo 456</button>
      </router-link>
    </div> -->
    <!-- <button @click="handleToBar">Bar</button> -->

    <!-- <div>
      <router-link :to="{ name: 'bar' }">bar</router-link> | 
      <router-link :to="{ name: 'foo', params: {id: 123} }">foo 123</router-link>
    </div>
    <div>
      <router-view></router-view>
      <router-view name="baz"></router-view>
    </div> -->

    <div>
      <!-- <router-link to="/about/bar?username=xiaoming">bar</router-link> -->
      <!-- <router-link :to="{ name: 'bar', query: { username: 'xiaobai' } }">bar</router-link> -->
      <!-- <router-link :to="{ name: 'bar', params: { username: 'xiaoqiang' } }">bar</router-link> -->
      <router-link :to="{ name: 'bar' }">bar</router-link> | 
      <router-link :to="{ name: 'foo', params: {id: 123} }">foo 123</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutView',
    methods: {
      handleToBar(){
        this.$router.push('/about/bar');
      }
    }
  }
</script>

<style scoped>

</style>