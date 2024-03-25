<template>
  <div>
    <h2>hello vuex</h2>
  </div>
</template>

<script setup lang="ts">

import { useStore } from '@/store';

const store = useStore();

store.state.count
store.state.users.username

</script>

<style scoped>

</style>