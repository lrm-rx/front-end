# 搜索关键词加筛选条件的综合案例

## 案例图示如下

<div align=center>
    <img src="./img/02-05-搜索关键词+筛选条件的综合案例.png" />
    <div>搜索关键词+筛选条件的综合案例</div>
</div>



## 准备好案例的JSON数据

```JSON
[
  {
    "id": 1,
    "name": "小明",
    "gender": "女",
    "age": 20
  },
  {
    "id": 2,
    "name": "小强",
    "gender": "男",
    "age": 18
  },
  {
    "id": 3,
    "name": "大白",
    "gender": "女",
    "age": 25
  },
  {
    "id": 4,
    "name": "大红",
    "gender": "男",
    "age": 22
  }
]
```

## 参考代码

```vue
<style>
    .active-gender{
      background: red;
    }
</style>
<div id="app">
    <input type="text" v-model="message">
    <button :class="activeGender('全部')" @click="handleGender('全部')">全部</button>
    <button :class="activeGender('男')" @click="handleGender('男')">男</button>
    <button :class="activeGender('女')" @click="handleGender('女')">女</button>
    <ul>
      <li v-for="item in filterList" :key="item.id">{{ item.name }}, {{ item.gender }}, {{ item.age }}</li>
    </ul>
</div>
<script>
    let vm = Vue.createApp({
      data() {
        return {
          list: [],
          message: '',
          gender: '全部'
        }
      },
      created(){
        fetch('./02-data.json').then((res)=> res.json()).then((res)=>{
          this.list = res;
        })
      },
      computed: {
        filterList(){
          return this.list
                  .filter((v)=> v.name.includes(this.message))
                  .filter((v)=> v.gender === this.gender || '全部' === this.gender);
        }
      },
      methods: {
        activeGender(gender){
          return { 'active-gender': this.gender === gender };
        },
        handleGender(gender){
          this.gender = gender;
        }
      }
    }).mount('#app');
</script>
```

