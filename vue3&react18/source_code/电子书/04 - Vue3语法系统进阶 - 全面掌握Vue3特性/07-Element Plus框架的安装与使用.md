# Element Plus框架的安装与使用

前面小节中介绍了自定义插件的实现，那么本小节来看下一比较出名的第三方插件Element Plus如何安装与使用。

## Element Plus框架

Element Plus是一套基于PC端的组件库，可以直接应用到很多管理系统的后台开发中，使用前需要先下载安装，除了下载组件库以外，最好也下载组件库对应的icon图标模块，如下：

```shell
npm install element-plus @element-plus/icons-vue
```

接下来把element plus完整引入到Vue中，包装全局组件，全局样式。

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
```

## 基本使用方式

element plus中提供了非常多的常见组件，例如：按钮、评分、表单控件等等。

```vue
<template>
  <div>
    <h2>element plus</h2>
    <el-button @click="handleClick" type="primary" icon="Clock">Primary</el-button>
    <el-button @click="handleClick2" type="success">Success</el-button>
    <el-rate v-model="value1" />
    <el-icon><Clock /></el-icon>
  </div>
</template>
<script>
  import { ElMessage, ElNotification } from 'element-plus';
  export default {
    data(){
      return {
        value1: 3
      }
    },
    mounted(){
      setTimeout(()=>{
        this.value1 = 5;
      }, 2000)
    },
    methods: {
      handleClick(){
        ElMessage.success('提示成功的消息');
      },
      handleClick2(){
        ElNotification({
          title: '邮件',
          message: '您今日的消费记录'
        });
      }
    }
  }
</script>
```

除了常见的组件外，element plus中也提供了一些逻辑组件，这些逻辑组件是可以直接在JavaScript中进行使用，例如：ElMessage，ElNotification等方法。


