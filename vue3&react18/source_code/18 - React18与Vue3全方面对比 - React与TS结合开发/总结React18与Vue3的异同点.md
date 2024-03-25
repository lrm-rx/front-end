# 总结React18与Vue3的异同点

## Vue

```vue

<input v-model="username">

<ul>
    <li v-for="item,index in list" @click="handleClick(index)"></li>
</ul>

methods: {
	handleClick(index){
	
    }
}

useRoute  useRouter

<div :title="foo" @click="handleClick" :style="myStyle">
    
</div>


watchEffect((cb)=>{

	cb(()=>{
       //更新前的触发
    })
})


```

## React

```react

<input value={username} onChange={(ev)=> setUsername(ev.target.value)} />
    
<ul>
{ 
    list.map((v, i)=> <li onClick={handleClick(i)}></li>)
}
</ul>
    
const handleClick = (index) => {
    return () => {
        console.log(index)
    }    
}
    
useLocation  useParams  useSearchParams  useNavigte ...

<div title={foo} onClick={handleClick} style={myStyle}>
    
</div>
    
useEffect(()=>{
   
   return ()=>{
       更新前的触发
   }
}, [count])
```

