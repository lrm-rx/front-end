# 什么是HTML5

### 定义

```
万维网的核心语言、标准通用标记语言下的一个应用超文本标记语言（HTML）的第五次重大修改。
```

### 环境

```
支持html5的浏览器包括Friefox（火狐浏览器），IE9及其更高版本，Chrome（谷歌浏览器），Safari，Opera等；国内的傲游浏览器（Maxthon），以及基于IE或Chromium（Chrome的工程版或称实验版）所推出的360浏览器、搜狗浏览器、QQ浏览器、猎豹浏览器等国产浏览器同样具备支持HTML5的能力。
```

### 目的

```
HTML5的设计目的是为了在移动设备上支持多媒体。新的语特性被引进以支持这一点，如video、audio和canvas标记。HTML5还引进了新的功能，可以真正改变用户与文档的交互方式。
```

### 新增特性

```
增加了新特征：语义特性，本地存储特性，设备兼容特性，连接特性，网页多媒体特性，三维、图形及特效特性，性能与集成特性，地理定位，设备权限与功能，CSS3特性
session、video、audio、worker、canvas、SVG、requestAnimationFrame、history、file Reader、Full Screen、Page Visibility、getUserMedia API、Battery API、Link Prefetching、orientationchange、navigator.vibrate、navigator.language、navigator.onLine、contentEditable、window.onblur & window.onfocus、loaction
```

### 对比HTML4

```
相比之前的进步：取消了一些过时的HTML4标记，将内容和展示分离，一些全新的表单输入对象，全新的，更合理的Tag，本地数据库，canvas对象，浏览器中的真正程序，html5取代Flash在移动设备的地位。
```

#### 优点

- 提高可用性和改进用户的友好体验；
- 有几个新的标签，这将有助于开发人员定义重要的内容；
- 可以给站点带来更多的多媒体元素（视频和音频）；
- 可以很好的替代FLASH和Sliverlight；
- 当涉及到网站的抓取和索引的时候，对于SEO很友好；
- 将被大量应用于移动应用程序和游戏；
- 可移植性好。

#### 缺点

- 随着标签功能与对应API的复杂化，各浏览器厂商在规则的实践上存在差异，兼容性需要控制。

### HTML5中的新增标签

为了更好地处理今天的互联网应用，HTML5添加了很多新元素及功能，比如： 图形的绘制，多媒体内容，更好的页面结构，更好的形式处理，和几个api拖放元素，定位，包括网页应用程序，存储，网络工作者。

##### canvas

| 标签     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| <canvas> | 标签定义图形，比如图表和其他图像。该标签基于javascript的绘图API |

##### 多媒体

| 标签     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| <audio>  | 定义音频内容                                           |
| <video>  | 定义视频（video和movie）                               |
| <source> | 定义多媒体资源<video>和<audio>字体                     |
| <embed>  | 定义嵌入的内容，比如插件。                             |
| <track>  | 为诸如<video>和<audio>元素之类的媒介规定外部文本轨道。 |

##### 表单

| 标签       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| <datalist> | 定义选项列表。请与input元素配合使用该元素，来定义input可能的值。 |
| <keygen>   | 规定用于表单的密钥对生成器字段。                             |
| <output>   | 定义不同类型的输出，比如脚本的输出。                         |

##### 语义和结构

HTML5提供了新的元素来创建更好的页面结构：

| 标签         | 描述                                                       |
| ------------ | ---------------------------------------------------------- |
| <article>    | 定义页面的侧边栏内容。                                     |
| <aside>      | 定义页面内容之外的内容。                                   |
| <bdi>        | 允许您设置一段文本，使其脱离其父元素的文本方向设置。       |
| <command>    | 定义命令按钮，比如单选按钮、复选框或按钮。                 |
| <details>    | 用于描述文档或文档某个部分的细节。                         |
| <dialog>     | 定义对话框，比如提示框。                                   |
| <summary>    | 标签包含details元素的标题。                                |
| <firure>     | 规定独立的流内容（图像、图表、照片、代码等等）。           |
| <figcaption> | 定义<firure>元素的标题。                                   |
| <footer>     | 定义section或document的页脚。                              |
| <header>     | 定义了文档的头部区域。                                     |
| <mark>       | 定义带有记号的文本。                                       |
| <meter>      | 定义度量衡。仅用于已知最大和最小值的度量。                 |
| <nav>        | 定义运行中的进度（进程）。                                 |
| <progress>   | 定义任何类型的任务的进度。                                 |
| <ruby>       | 定义ruby注释（中文注音或字符）。                           |
| <rt>         | 定义字符（中文注音或字符）的解释或发音。                   |
| <rp>         | 在ruby注释中使用，定义不支持ruby元素的浏览器所显示的内容。 |
| <section>    | 定义文档中的节（section、区段）。                          |
| <time>       | 定义日期或时间。                                           |
| <wbr>        | 规定在文本中的何处适合添加换行符。                         |
| <main>       | 用于展示文档的主体部分。                                   |

> **在开发中常用的有：section、header、aside、article、footer、nav**、main

### HTML中移除的元素

以下的HTML4.01元素在HTML5中已经被删除：

```
<acronym>字体兼容
<applet> java组件
<basefont>字体
<big>
<center>
<dir>目录
<font>
<frame>
<frameset>
<noframes>
<strike>
```

### 元素分类

#### 根元素

`html`

####  元数据元素

`head、base、meta、title、link、style`

#### 分区元素

`body、header、footer、aside、main、nav、section、h1~h6、hgroup、address`

#### 块文本元素

`div、p、ol、ul、li、dd、dl、dt、hr、blockquote、figcaption、figure`

#### 内联文本元素

`a、span、br、abbr、cite、code、small、time、bdi、bdo`

`data、dfn、kbd、mark、q、rb、rp、rt、rtc、ruby、samp、u、var、wbr`

#### 媒体元素

`audio、img、video、map、track、area`

#### 内嵌元素

`embed、iframe、object、param、picture、source`

#### 脚本元素

`canvas、script、noscript`

#### 编辑标识元素

`del、ins`



