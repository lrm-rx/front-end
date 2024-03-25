# 利用组合式API开发搜索提示列表

本小节完成搜索页面的提示列表功能。

```vue
<template>
  <div class="search-input">
    <i class="iconfont iconsearch"></i>
    <input type="text" placeholder="搜索歌曲" v-model="searchWord" @input="handleToSuggest">
    <i v-if="searchWord" @click="handleToClose" class="iconfont iconguanbi"></i>
  </div>
  <template v-if="searchType == 1">
    ...
  </template>
  <template v-else-if="searchType == 2">
    ...
  </template>
  <template v-else-if="searchType == 3">
    <div class="search-suggest">
      <div class="search-suggest-head">搜索“ {{ searchWord }} ”</div>
      <div class="search-suggest-item" v-for="item in suggestList" :key="item.id" @click="handleItemResult(item.name), handleAddHistory(item.name)">
        <i class="iconfont iconsearch"></i>{{ item.name }}
      </div>
    </div>
  </template>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import '@/assets/iconfont/iconfont.css';

function useSearch(){
  let searchType = ref(1);
  let searchWord = ref('');
  let handleToClose = () => {
    searchWord.value = '';
    searchType.value = 1;
  };
  return {
    searchType,
    searchWord,
    handleToClose
  }
}

function useSuggest(){
  let suggestList = ref([]);
  let handleToSuggest = () => {
    if(searchWord.value){
      searchType.value = 3;
      axios.get(`/api/search/suggest?keywords=${searchWord.value}`).then((res)=>{
        let result = res.data.result;
        if(!result.order){
          return;
        }
        let tmp = [];
        for(let i=0;i<result.order.length;i++){
          tmp.push(...result[result.order[i]]);
        }
        suggestList.value = tmp;
      })
    }
    else{
      searchType.value = 1;
    }
  };
  return {
    suggestList,
    handleToSuggest
  }
}

let { searchType, searchWord, handleToClose } = useSearch();
let { suggestList, handleToSuggest } = useSuggest();

</script>
```
