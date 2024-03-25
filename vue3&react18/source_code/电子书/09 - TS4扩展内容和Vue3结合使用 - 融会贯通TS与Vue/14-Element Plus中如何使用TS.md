# Element Plus中如何使用TS

## Element Plus中使用TS

Element Plus默认就是高度集成TS的支持，不过为了更好的能让Element Plus进行提示效果，还是需要做一些处理配置的。

如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.types 指定全局组件类型"types": ["element-plus/global"]

```json
// tsconfig.json
"types": [
    "webpack-env",
    "element-plus/global"
]
```

配置好后，当输入`<`的时候，就会自动带有提示组件功能，以及组件属性与属性值的提示效果。

<div align=center>
    <img src="./img/09-03-ElmentPlus组件名提示.png" />
    <div>ElmentPlus组件名提示</div>
</div>

<div align=center>
    <img src="./img/09-04-ElmentPlus组件属性提示.png" />
    <div>ElmentPlus组件属性提示</div>
</div>

这里需要注意，由于Volar插件更新比较快，如果不能很好进行提示的话，可以把Volar插件降级到1.0.0这个版本。

除了提示外，Element Plus默认带有的类型都可以在Vue项目中引入，并进行使用，例如表单控件，代码如下：

```vue
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
})
const submitForm = async (formEl: FormInstance | undefined) => {
}
```

`FormInstance`用于定义表单实例的类型，`FormRules`用于定义表单规则的类型等。

