# setup方法与script_setup及ref响应式

## setup方法与script_setup

在Vue3.1版本的时候，提供了setup方法；而在Vue3.2版本的时候，提供了script_setup属性。那么setup属性比setup方法对于操作组合式API来说会更加的简易。

```vue

<template>
  <div>
    <h2>setup方法</h2>
    {{ count }}
  </div>
</template>

// Vue3.1
<script>
export default {
  setup () {
    let count = 0;
    return {
      count
    }
  }
}
</script>

// Vue3.2
<script setup>
let count = 0;
</script>
```

setup方法是需要把数据进行return后，才可以在template标签中进行使用，而setup属性方式定义好后就可以直接在template标签中进行使用。

## ref响应式

下面来学习一下，如何在组合式API中来完成数据的响应式操作，通过的就是ref()方法，需要从vue模块中引入这个方法后才可以使用。

```vue
<script setup>
import { ref } from 'vue';
let count = ref(0);   // count -> { value: 0 }
//count += 1;   //✖
count.value += 1;   // ✔
</scirpt>
```

count数据的修改，需要通过count.value的方式，因为vue底层对响应式数据的监控必须是对象的形式，所以我们的count返回的并不是一个基本类型，而是一个对象类型，所以需要通过count.value进行后续的操作，那么这种使用方式可能会添加我们的心智负担，还好可以通过Volar插件可以自动完成.value的生成，大大提升了使用方式。

那么现在count就具备了响应式变化，从而完成视图的更新操作。

那么ref()方法还可以关联原生DOM，通过标签的ref属性结合到一起，也可以关联到组件上。

```vue
<template>
  <div>
    <h2 ref="elem">setup属性方式</h2>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let elem = ref();
setTimeout(()=>{
  console.log( elem.value );   //拿到对应的原生DOM元素
}, 1000)
</script>
```

