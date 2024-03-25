# 搭建登录界面及iconfont图标使用

## iconfont图标

项目中会使用到一些第三方的字体图标，可以通过阿里巴巴矢量图标库进行下载，地址：https://www.iconfont.cn/。

我们提前下载好相关文件，还要一种背景图片，分别把导致指定的位置：

- /src/assets/images/iconfont.ttf
- /src/assets/images/login-bg.svg
- src/assets/styles/iconfont.scss

## 登录页界面搭建

布局主要会用到`element-plus`库中的`el-form`表单组件，布局结构如下：

```vue
<!-- /src/views/Login/Login.vue -->
<template>
  <div class="login">
    <div class="header">
      <span class="header-logo">
        <i class="iconfont icon-vue"></i>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-typescript"></i>
      </span>
      <span class="header-title">在线考勤系统</span>
    </div>
    <div class="desc">
      零基础从入门到进阶，系统掌握前端三大热门技术(Vue、React、TypeScript)
    </div>
    <el-form
      label-width="120px"
      class="main"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input
          type="text"
          placeholder="请输入邮箱"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="users">
      <el-row :gutter="20">
        <el-col :span="12">
          <h3>
            测试账号，<el-button>一键登录</el-button>
          </h3>
          <p>邮箱：xxx</p>
          <p>密码：xxx</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
```

除了布局外，还有样式设置，代码如下：

```vue
<!-- /src/views/Login/Login.vue -->
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/login-bg.svg') no-repeat center 110px;
  background-size: 100%;
  .header {
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    padding-top: 100px;
    .header-logo {
      .icon-vue,
      .icon-icon-test,
      .icon-typescript {
        margin-right: 5px;
        font-size: inherit;
      }
      .icon-vue {
        color: green;
      }
      .icon-icon-test {
        color: #deb887;
      }
      .icon-typescript {
        color: blue;
      }
    }
    .header-title {
      margin-left: 30px;
      font-weight: 700;
      font-size: 30px;
    }
  }
  .desc {
    text-align: center;
    padding-top: 30px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
  }
  .main {
    width: 500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .users{
    width: 500px;
    margin: 60px auto;
    color: rgba(0,0,0,.65);
    h3{
      font-size: 16px;
    }
    p{
      margin: 20px;
    }
  }
}
</style>
```

这样就完成了我们的登录页的布局。

<div align=center>
    <img src="./img/11-01-登录页布局.png" />
    <div>登录页布局</div>
</div>
