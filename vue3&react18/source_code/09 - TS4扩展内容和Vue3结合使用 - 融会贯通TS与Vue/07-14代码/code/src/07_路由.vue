<template>
  <div>
    <h2>hello router</h2>
  </div>
</template>

<script setup lang="ts">

import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

route.hash

router.push('/login')

</script>

<style scoped>

</style>