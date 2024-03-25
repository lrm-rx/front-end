<template>
  <div>

  </div>
</template>

<script setup>

import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
defineComponent({
  name: 'CompositionView'
});

const route = useRoute();
const router = useRouter();
const store = useStore();

console.log( route.meta );
console.log( router.getRoutes() );

console.log( store.state.count );
console.log( store.state.message.msg );


</script>

<style lang="scss" scoped>

</style>