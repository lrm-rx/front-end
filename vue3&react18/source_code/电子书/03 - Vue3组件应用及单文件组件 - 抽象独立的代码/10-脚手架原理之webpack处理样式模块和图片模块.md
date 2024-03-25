# 脚手架原理之webpack处理样式模块和图片模块

## loader预处理文件

在模块化使用中，默认只会支持JS文件，那么怎么能够让其他类型的文件，例如：css文件、图片文件、json文件等等都可以当作模块化进行使用呢？这就需要使用loader技术。

## 支持css模块化

可以通过安装，`css-loader`和`style-loader`这两个模块来支持css模块化操作。其中`css-loader`作用是让css文件能够import方式进行使用，而`style-loader`的作用是把css代码抽离到`<style>`标签中，这样样式就可以在页面中生效。

```js
module.exports = {
    module: {
    	rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
```

注意数组的顺序是先执行后面再执行前面，所以先写`style-loader`再写`css-loader`，这样就可以通过`import './assets/common.css'`在main.js中进行使用。

## 图片模块

同样的情况，如果让webpack支持图片模块化也要使用对应的loader，不过在最新版本的webpack中已经内置了对图片的处理，所以只需要配置好信息就可以支持图片模块化。

```js
module.exports = {
    module: {
    	rules: [
            ...,
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}
```

