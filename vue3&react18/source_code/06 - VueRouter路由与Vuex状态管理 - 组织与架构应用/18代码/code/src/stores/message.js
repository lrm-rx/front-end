import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', () => {
  const msg = ref('hello')
  const upperMsg = computed(() => msg.value.toUpperCase())
  function change(payload) {
    msg.value = payload;
  }

  return { msg, upperMsg, change }
})
