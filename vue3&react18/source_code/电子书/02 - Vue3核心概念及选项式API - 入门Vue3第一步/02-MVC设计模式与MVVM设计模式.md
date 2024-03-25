# MVC设计模式与MVVM设计模式

使用Vue框架开发前端项目，最大的优势就是再也不用进行复杂的DOM操作了，我们只要关心数据的变化即可，Vue框架会帮我们把复杂的DOM进行渲染，这背后都要归功于他的设计思想，即MVVM设计模式。

了解MVVM设计模式之前，有必要先了解一下MVC设计模式，MVVM模式是在MVC模式基础上演变而来的。

最早的MVC设计模式是出现在后端开发中，主要目的就是让视图层与数据层分离，职责更加清晰，方便开发等等，例如：Spring MVC、ASP.NET MVC等等。

<div align=center>
    <img src="./img/02-01-后端经典MVC.png" />
    <div>后端经典MVC</div>
</div>


随着Ajax技术的流行，前后端分离开发越来越流行，前端需要处理复杂的视图与数据，迫使前端也急需一种设计模式来进行分层处理，所以MVC设计模式开始进入前端领域。

早期比较经典的前端MVC框架就是backbone.js，但是前后端还是有很大差异的，所以对传统MVC做了一些改良。

<div align=center>
    <img src="./img/02-02-backboneMVC.png" />
    <div>backboneMVC</div>
</div>


backbone.js存在的问题：

 - 数据流混乱，尤其是多视图多数据场景下
 - 控制层单薄，可有可无

于是2009年Angular.js横空出世，带来了全新的MVVM设计模式，让开发者眼前一亮，除了M和V层以外，就是这个VM层啦，即：viewModel层。MVVM设计模式的核心思想就是不让Model和View这两层直接通信，而是通过VM层来连接。

<div align=center>
    <img src="./img/02-03-MVVM.png" />
    <div>MVVM</div>
</div>


<div align=center>
    <img src="./img/02-04-Vue-MVVM.png" />
    <div>Vue-MVVM</div>
</div>


MVVM设计模式比MVP模式的优势：

- ViewModel能够观察到数据的变化，并对视图对应的内容进行自动更新
- ViewModel能够监听到视图的变化，并能够通知数据发生变化

虽然最早提出MVVM模式的是Angular.js，但是Vue把MVVM设计模式发扬光大了，Vue也成为了当下最主流的前端框架之一。

Vue官网上的一段话：虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示组件实例。

MVVM 模型中 M 和 V 不能直接操作，需要VM层加持。但Vue比较灵活，可以直接去操作原生DOM，也就是直接去操作V层。