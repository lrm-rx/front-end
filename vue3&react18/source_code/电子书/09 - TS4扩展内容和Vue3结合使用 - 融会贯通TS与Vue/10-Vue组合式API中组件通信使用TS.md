# Vue组合式API中组件通信使用TS

## 父子通信使用TS

主要利用的方案是，`defineProps + 泛型`模式，`defineProps`是组合式API中父子通信使用的主要方式，可以利用vue自带的方式进行类型注解。

```vue
<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
	count: [Number, String]
});
</script>
```

同样会跟选项式API中有一个共同的问题，那么就是vue的这种方式用于限定类型还是比较有局限性的，再复杂的类型注解就要利用TS的能力来完成了，比如泛型的方式。

```vue
<script setup lang="ts">
import { defineProps } from 'vue'
interface Props {
  count: number|string
  list: {username: string; age: number}[]
}
defineProps<Props>();
</script>
```

这样就可以完成TS的类型注解，可以发现TS跟组合式API配合起来是非常简单的。

## 子父通信使用TS

主要利用的方案是`defineEmits + 泛型`的方案，跟我们的父子通信差不太多。

```vue
<script setup lang="ts">
import { defineEmits } from 'vue'
interface Emits {
  (e: 'get-data', payload: string): void
}
let emit = defineEmits<Emits>();
emit('get-data', 'hello');   // ✔
</script>
```

总结来说，TS跟组合式的配合要比跟选项式的配合更加的简单，所以推荐项目采用组合式API + TS来进行开发项目。
