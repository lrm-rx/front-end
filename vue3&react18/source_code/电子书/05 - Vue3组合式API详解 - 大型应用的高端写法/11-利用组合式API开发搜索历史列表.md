# 利用组合式API开发搜索历史列表

本小节完成搜索页面的历史列表功能。

```vue
<template>
  <div class="search-input">
    <i class="iconfont iconsearch"></i>
    <input type="text" placeholder="搜索歌曲" v-model="searchWord" @input="handleToSuggest" @keydown.enter="handleToResult($event), handleAddHistory($event)">
    <i v-if="searchWord" @click="handleToClose" class="iconfont iconguanbi"></i>
  </div>
  <template v-if="searchType == 1">
    <div class="search-history">
      <div class="search-history-head">
        <span>历史记录</span>
        <i class="iconfont iconlajitong" @click="handleToClear"></i>
      </div>
      <div class="search-history-list">
        <div v-for="item in historyList" :key="item" @click="handleItemResult(item)">{{ item }}</div>
      </div>
    </div>
  </template>
  <template v-else-if="searchType == 2">
    ...
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
  ...
}  
function useHistory(){
  let key = 'searchHistory';
  let getSearchHistory = () => {
    return JSON.parse(localStorage.getItem(key) || '[]');
  };
  let setSearchHistory = (list) => {
    localStorage.setItem(key, JSON.stringify(list));
  };
  let clearSearchHistory = () => {
    localStorage.removeItem(key);
  };
  let historyList = ref(getSearchHistory());
  let handleAddHistory = (arg) => {
    if(!searchWord.value){
      return;
    }
    if(typeof arg === 'string'){
      searchWord.value = arg;
    }
    historyList.value.unshift(searchWord.value);
    historyList.value = [...new Set(historyList.value)];
    setSearchHistory(historyList.value);
  };
  let handleToClear = () => {
    clearSearchHistory();
    historyList.value = [];
  };
  return {
    historyList,
    handleAddHistory,
    handleToClear
  };
} 

let { searchType, searchWord, handleToClose } = useSearch();
let { suggestList, handleToSuggest } = useSuggest();
let { resultList, handleToResult, handleItemResult } = useResult();
let { historyList, handleAddHistory, handleToClear } = useHistory();
</script>
```

