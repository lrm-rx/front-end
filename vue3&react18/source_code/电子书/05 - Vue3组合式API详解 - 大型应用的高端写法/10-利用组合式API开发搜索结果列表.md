# 利用组合式API开发搜索结果列表

本小节完成搜索页面的结果列表功能。

```vue
<template>
  <div class="search-input">
    <i class="iconfont iconsearch"></i>
    <input type="text" placeholder="搜索歌曲" v-model="searchWord" @input="handleToSuggest" @keydown.enter="handleToResult($event)">
    <i v-if="searchWord" @click="handleToClose" class="iconfont iconguanbi"></i>
  </div>
  <template v-if="searchType == 1">
    ...
  </template>
  <template v-else-if="searchType == 2">
    <div class="search-result">
      <div class="search-result-item" v-for="item in resultList" :key="item.id">
        <div class="search-result-word">
          <div>{{ item.name }}</div>
        </div>
        <i class="iconfont iconbofang"></i>
      </div>
    </div>
  </template>
  <template v-else-if="searchType == 3">
    ...
  </template>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import '@/assets/iconfont/iconfont.css';

function useSearch(){
  ...
}
function useSuggest(){
  ...
}
function useResult(){
  let resultList = ref([]);
  let handleToResult = () => {
    if(!searchWord.value){
      return;
    }
    axios.get(`/api/search?keywords=${searchWord.value}`).then((res)=>{
      let result = res.data.result;
      if(!result.songs){
        return;
      }
      searchType.value = 2;
      resultList.value = result.songs;
    })
  };
  let handleItemResult = (name) => {
    searchWord.value = name;
    handleToResult();
  };
  return {
    resultList,
    handleToResult,
    handleItemResult
  }
}  

let { searchType, searchWord, handleToClose } = useSearch();
let { suggestList, handleToSuggest } = useSuggest();
let { resultList, handleToResult, handleItemResult } = useResult();
</script>
```

