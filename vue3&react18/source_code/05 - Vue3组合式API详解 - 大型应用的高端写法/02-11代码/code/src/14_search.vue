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

<style>
.search-input{ display: flex; align-items: center; height:35px; margin:35px 15px 25px 15px; background:#f7f7f7; border-radius: 25px;}
.search-input i{ margin:0 13px;}
.search-input input{ flex:1; font-size:14px; border:none; background:#f7f7f7; outline: none;}

.search-history{ margin:0 15px 25px 15px; font-size:14px;}
.search-history-head{ display: flex; justify-content: space-between; margin-bottom:18px;}
.search-history-list{ display: flex; flex-wrap: wrap;}
.search-history-list div{ padding:8px 14px; border-radius: 20px; margin-right:15px; margin-bottom: 15px; background:#f7f7f7;}

.search-result{ border-top:1px #e4e4e4 solid; padding:15px;}
.search-result-item{ display: flex; justify-content: space-between; align-items: center; padding-bottom: 15px; margin-bottom: 15px; border-bottom:1px #e4e4e4 solid;}
.search-result-word div:nth-child(1){ font-size:16px; color:#235790; margin-bottom: 6px;}
.search-result-word div:nth-child(2){ font-size:14px; color:#898989;}
.search-result-item i{ font-size:30px; color:#878787;}

.search-suggest{ border-top:1px #e4e4e4 solid; padding:15px; font-size:14px;}
.search-suggest-head{ color:#4574a5; margin-bottom:37px;}
.search-suggest-item{ color:#5d5d5d; margin-bottom:37px;}
.search-suggest-item i{ color:#bdbdbd; margin-right:14px; position: relative; top:1px;}
</style>