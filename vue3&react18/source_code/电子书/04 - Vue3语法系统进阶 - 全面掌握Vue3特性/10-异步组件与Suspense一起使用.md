# 异步组件与Suspense一起使用

## 异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。

在上一个小节的动态组件的基础上，进行异步组件的演示。首先可以打开chrome浏览器的network网络，可以观察到在动态组件切换的时候，network网络中没有进行任何请求的加载，这证明了在初始的时候，相关的动态组件就已经加载好了。

所以对于大型项目来说，如果能实现按需载入的话，那么势必会对性能有所提升，在Vue中主要就是利用defineAsyncComponent来实现异步组件的。

```vue
<script>
import { defineAsyncComponent } from 'vue'
export default {
    data(){
        return {
            nowCom: 'my-com1'
        }
    },
    components: {
        'my-com1': defineAsyncComponent(() => import('@/MyCom1.vue')),
        'my-com2': defineAsyncComponent(() => import('@/MyCom2.vue')),
        'my-com3': defineAsyncComponent(() => import('@/MyCom3.vue'))
    }
}
</script>
```

## Suspense组件

由于异步组件是点击切换的时候才去加载的，所以可能会造成等待的时间，那么这个时候可以配合一个loading效果，在Vue中提供了一个叫做`<Suspense>`的组件用来完成loading的处理。

```vue
<template>
	<suspense>
        <component :is="nowCom"></component>
        <template #fallback>
            <div>loading...</div>
		</template>
	</suspense>
</template>
```

