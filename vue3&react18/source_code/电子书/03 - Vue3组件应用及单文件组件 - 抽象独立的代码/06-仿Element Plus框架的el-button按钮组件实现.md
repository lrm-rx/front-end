# 仿Element Plus框架的el-button按钮组件实现

本小节利用前面学习的组件通信知识，来完成一个仿Element Plus框架的el-button按钮组件实现。仿造的地址：uhttps://element-plus.org/zh-CN/component/button.html

## 实现需求

- 按钮类型
- 按钮尺寸
- 按钮文字
- 添加图标

## 完整代码如下：

```vue
<style>
    .el-button{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      height: 32px;
      white-space: nowrap;
      cursor: pointer;
      background-color: #ffffff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      transition: .1s;
      font-weight: 500;
      user-select: none;
      vertical-align: middle;
      padding: 8px 15px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button--primary{
      color: white;
      background-color: #409eff; 
    }
    .el-button--success{
      color: white;
      background-color: #67c23a; 
    }
    .el-button--large{
      height: 40px;
      padding: 12px 19px;
      font-size: 14px;
    }
    .el-button--small{
      height: 24px;
      padding: 5px 11px;
      font-size: 12px;
      border-radius: 3px;
    }
</style>
<link rel="stylesheet" href="./iconfont/iconfont.css">
<script src="../vue.global.js"></script>
<div id="app">
    <el-button>default</el-button>
    <el-button type="primary" size="small">Primary</el-button>
    <el-button type="success" size="large">Success</el-button>
    <el-button type="success" size="large">
      <template #icon>
        <i class="iconfont iconfangdajing"></i>
      </template>
      Success
    </el-button>
  </div>
<script>
    let ElButton = {
        data(){
            return {
                buttonClass: {
                    'el-button': true,
                    [`el-button--${this.type}`]: this.type !== '', 
                    [`el-button--${this.size}`]: this.size !== '' 
                }
            }
        },
        props: {
            type: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            }
        },
        template: `
        <button :class="buttonClass">
          <slot name="icon"></slot>
          <slot></slot>
    	</button>`
    };

    let vm = Vue.createApp({
        data(){
            return {
            }
        },
        components: {
            ElButton
        }
    }).mount('#app');
</script>
```

