# Vue组合式API中如何使用TS

## 组合式API使用TS

组合式API中使用TS，要比选项式API中使用TS会更加的简单，不需要做过多的处理，只需要利用原生TS的能力就可以。并且组合式API都具备自动类型推断的能力，代码如下：

```vue
<script setup lang="ts">
import { computed, ref } from 'vue';
let count = ref(0);
let doubleCount = computed(()=> count.value * 2);
let handlClick = (n: number) => {
  count.value += n;
}
</script>
```

count和doubleCount都会被自动推断出其对应的类型。如果想要进行更复杂的类型设置，需要自己手动进行类型注解，可利用泛型方式来实现。

```vue
<script setup lang="ts">
import { computed, ref } from 'vue';
interface List {
	username: string
	age: number
}
let count = ref<number|string>(0);
let list = ref<List[]>([]);
</script>
```

可以发现在组合式API中使用TS非常的简单。
