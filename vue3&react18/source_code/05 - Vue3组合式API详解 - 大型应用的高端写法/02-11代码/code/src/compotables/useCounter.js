import { computed, ref } from 'vue';
function useCounter(num){
  let count = ref(num);
  let doubleCount = computed(()=> count.value * 2 );
  return {
    count,
    doubleCount
  }
}

export default useCounter;