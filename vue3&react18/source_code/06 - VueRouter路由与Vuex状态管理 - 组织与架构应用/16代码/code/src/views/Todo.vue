<template>
  <div>
    <ul>
      <li v-for="item in todoList" :key="item.id" :class="{ through: item.isChecked }">
        <input type="checkbox" v-model="item.isChecked"> {{ item.task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
defineComponent({
  name: 'TodoView'
});

const store = useStore();

const todoList = computed(()=> store.state.todoList)

</script>

<style scoped>

</style>