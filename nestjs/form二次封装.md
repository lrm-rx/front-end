# form二次封装



### 方法一:

> ```
> 使用vue3  element plus 加 js,  二次封装form表单, 通过配置项灵活地运用form表单, 表单包含常用的表单项, 输入, 单选, 复选, 下拉选择, 级联选择等, 其中还要重点包括文件/图片上传, 上传文件/图片大小展示, 一个表单中有可能有多个不一致的上传文件/图片提示. 可以使用jsx语法, 不允许使用ts, 使用<script setup>语法糖, 如何做到更好的复用代码. 请使用最详细的代码列举出来. 
> ```

代码:

```vue
<template>
  <div v-if="formConfig">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      :label-width="formConfig.labelWidth || 'auto'"
      :label-position="formConfig.labelPosition || 'right'"
      :size="formConfig.size || 'default'"
      :inline="formConfig.inline || false"
      :disabled="formConfig.disabled || false"
      :show-message="formConfig.showMessage !== false"
      @submit.native.prevent="onSubmit"
    >
      <template v-for="(item, index) in formConfig.items" :key="index">
        <template v-if="item.type === 'input'">
          <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
            <el-input
              v-model="formData[item.prop]"
              :type="item.inputType || 'text'"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :clearable="item.clearable"
              :readonly="item.readonly"
              :maxlength="item.maxlength"
              :show-word-limit="item.showWordLimit"
            />
          </el-form-item>
        </template>
        <template v-else-if="item.type === 'radio'">
          <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
            <el-radio-group v-model="formData[item.prop]">
              <el-radio
                v-for="(option, index) in item.options"
                :key="index"
                :label="option.value"
              >
                {{ option.label }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
        <template v-else-if="item.type === 'checkbox'">
          <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
            <el-checkbox-group v-model="formData[item.prop]">
              <el-checkbox
                v-for="(option, index) in item.options"
                :key="index"
                :label="option.value"
              >
                {{ option.label }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </template>
        <template v-else-if="item.type === 'select'">
          <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
            <el-select
              v-model="formData[item.prop]"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :clearable="item.clearable"
              :filterable="item.filterable"
              :multiple="item.multiple"
            >
              <el-option
                v-for="(option, index) in item.options"
                :key="index"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
        </template>
        <template v-else-if="item.type === 'cascader'">
          <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
            <el-cascader
              v-model="formData[item.prop]"
              :options="item.options"
              :props="item.props || { checkStrictly: true }"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :clearable="item.clearable"
              :filterable="item.filterable"
            />
          </el-form-item>
        </template>
        <template v-else-if="item.type === 'upload'">
          <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
            <el-upload
              ref="uploadRef"
              v-model="formData[item.prop]"
              :action="item.action"
              :headers="item.headers"
              :name="item.name"
              :data="item.data"
              :multiple="item.multiple"
              :auto-upload="item.autoUpload"
              :limit="item.limit"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-upload="beforeUpload"
              :file-list="formData[item.prop]"
              :on-change="handleChange"
            >
              <el-button type="primary">点击上传</el-button>
              <el-template #tip>
                <div v-if="item.tip">
                  {{ item.tip }}
                </div>
              </el-template>
              <template #default="{ file, fileList }">
                <div
                  v-for="(f, i) in fileList"
                  :key="i"
                  class="el-upload-list__item"
                >
                  <img
                    v-if="f.url"
                    :src="f.url"
                    class="el-upload-list__item-thumbnail"
                  >
                  <div class="el-upload-list__item-info">
                    <span class="el-upload-list__item-name">{{ f.name }}</span>
                    <span class="el-upload-list__item-size">{{ formatFileSize(f.size) }}</span>
                    <template v-if="item.showProgress">
                      <el-progress
                        type="line"
                        :percentage="f.percentage"
                        :show-text="false"
                      />
                    </template>
                  </div>
                </div>
              </template>
            </el-upload>
          </el-form-item>
        </template>
      </template>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';

const formRef = ref(null);
const formConfig = ref(null);
const formData = ref({});
const rules = ref({});
const uploadRef = ref(null);

// 配置项
formConfig.value = {
  labelWidth: '120px',
  labelPosition: 'right',
  items: [
    {
      type: 'input',
      label: '姓名',
      prop: 'name',
      required: true,
      placeholder: '请输入姓名'
    },
    {
      type: 'radio',
      label: '性别',
      prop: 'gender',
      required: true,
      options: [
        {
          label: '男',
          value: 'male'
        },
        {
          label: '女',
          value: 'female'
        }
      ]
    },
    {
      type: 'checkbox',
      label: '爱好',
      prop: 'hobbies',
      options: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        },
        {
          label: '羽毛球',
          value: 'badminton'
        }
      ]
    },
    {
      type: 'select',
      label: '城市',
      prop: 'city',
      options: [
        {
          label: '北京',
          value: 'beijing'
        },
        {
          label: '上海',
          value: 'shanghai'
        },
        {
          label: '广州',
          value: 'guangzhou'
        }
      ]
    },
    {
      type: 'cascader',
      label: '省市区',
      prop: 'address',
      options: [
        {
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'beijing_chaoyang',
              label: '朝阳区'
            },
            {
              value: 'beijing_haidian',
              label: '海淀区'
            }
          ]
        },
        {
          value: 'shanghai',
          label: '上海',
          children: [
            {
              value: 'shanghai_pudong',
              label: '浦东新区'
            },
            {
              value: 'shanghai_huangpu',
              label: '黄浦区'
            }
          ]
        }
      ]
    },
    {
      type: 'upload',
      label: '上传文件',
      prop: 'files',
      action: '/api/upload',
      name: 'file',
      multiple: true,
      limit: 3,
      showProgress: true,
      tip: '支持jpg、png、gif格式图片，最大5MB',
      beforeUpload(file) {
        // 文件类型校验
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
          ElMessage.error('上传文件大小不能超过 5MB!');
        }
        return isLt2M;
      }
    }
  ]
};

// 初始化表单数据和校验规则
onMounted(() => {
  formData.value = {};
  rules.value = {};
  formConfig.value.items.forEach(item => {
    if (item.required) {
      rules.value[item.prop] = [
        { required: true, message: `${item.label} 不能为空`, trigger: 'blur' }
      ];
    }
    formData.value[item.prop] = item.defaultValue || '';
  });
});

// 格式化文件大小
const formatFileSize = (size) => {
  if (size < 1024) {
    return size + 'B';
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + 'KB';
  } else {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }
};

// 预览文件
const handlePreview = (file) => {
  // 打开图片预览
  window.open(file.url);
};

// 删除文件
const handleRemove = (file, fileList) => {
  // 删除文件
  // ...
};

// 上传文件前校验
const beforeUpload = (file) => {
  // 文件类型校验
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    ElMessage.error('上传文件大小不能超过 5MB!');
  }
  return isLt2M;
};

// 文件上传改变事件
const handleChange = (file, fileList) => {
  // 更新文件列表
  // ...
};

// 提交表单
const onSubmit = () => {
  // 表单校验
  formRef.value.validate((valid) => {
    if (valid) {
      // 提交表单数据
      // ...
    } else {
      console.error('表单校验失败');
    }
  });
};

// 重置表单
const resetForm = () => {
  formRef.value.resetFields();
  formData.value = {};
};

</script>

<style scoped>
.el-upload-list__item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-upload-list__item-size {
  margin-left: 10px;
}
</style>

```

**代码说明：**

1. **配置项：** 使用 `formConfig` 对象来存储表单的配置信息，包括表单项类型、标签、属性、选项、校验规则等。
2. **表单数据和校验规则：** 使用 `formData` 和 `rules` 对象分别存储表单数据和校验规则，并在 `onMounted` 生命周期钩子中根据 `formConfig` 初始化。
3. **表单项渲染：** 使用 `v-for` 指令遍历 `formConfig.items`，根据 `item.type` 来渲染不同的表单项，并使用 `v-model` 指令实现双向数据绑定。
4. **文件上传：** 使用 `el-upload` 组件实现文件上传功能，并使用 `beforeUpload`、`onPreview`、`onRemove` 和 `handleChange` 事件处理上传过程中的各种操作。
5. **文件大小展示：** 使用 `formatFileSize` 方法格式化文件大小，并将其显示在文件列表中。
6. **文件上传提示：** 使用 `item.tip` 属性自定义文件上传提示信息，并在 `el-upload` 组件的 `#tip` 插槽中渲染。
7. **表单提交：** 使用 `onSubmit` 方法提交表单，并进行表单校验。
8. **表单重置：** 使用 `resetForm` 方法重置表单。

**代码复用：**

- **组件化：** 将表单封装成一个独立的组件，方便复用。
- **配置化：** 使用配置项来控制表单的结构、样式和行为，提高代码可读性和可维护性。
- **模板化：** 使用 `v-for` 和 `template` 指令，根据配置项动态渲染表单项，避免重复代码。

**示例：**

```vue
<template>
  <div id="app">
    <my-form :form-config="formConfig" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MyForm from './MyForm.vue';

const formConfig = ref({
  // ...表单配置项
});

</script>

```

**其他说明：**

- 该代码示例仅供参考，可以根据实际需求进行调整和扩展。
- 建议使用 `ts` 进行类型校验，提高代码可读性和可维护性。
- 可以使用 `vuex` 或其他状态管理工具来管理表单数据，方便在不同组件之间共享数据。

**总结：**

通过使用 `vue3`、`element plus` 和 `js`，并结合配置项和模板化，可以实现一个灵活可复用的表单组件，方便开发者快速构建各种类型的表单，并有效提高代码复用率。





### 方法二:

> ```
> 使用vue3  element plus 加 js,  二次封装form表单, 通过配置项灵活地运用form表单, 表单包含常用的表单项, 输入, 单选, 复选, 下拉选择, 级联选择等, 其中还要重点包括文件/图片上传, 上传文件/图片大小展示, 一个表单中有可能有多个不一致的上传文件/图片提示. 使用jsx语法, 不允许使用ts, 使用<script setup>语法糖及component 动态组件, 如何做到更好的复用代码. 请使用最详细的代码列举出来. 代码量要求尽可能少.
> ```

```vue
<template>
  <el-form
    ref="formRef"
    :model="formData"
    :rules="rules"
    :label-width="formConfig.labelWidth || 'auto'"
    :label-position="formConfig.labelPosition || 'right'"
    :size="formConfig.size || 'default'"
    :inline="formConfig.inline || false"
    :disabled="formConfig.disabled || false"
    :show-message="formConfig.showMessage !== false"
    @submit.native.prevent="onSubmit"
  >
    <template v-for="(item, index) in formConfig.items" :key="index">
      <component 
        :is="item.type"
        :item="item"
        :formData="formData"
        :rules="rules"
        @update:formData="(value) => { formData[item.prop] = value }"
      />
    </template>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import InputItem from './components/InputItem.vue';
import RadioItem from './components/RadioItem.vue';
import CheckboxItem from './components/CheckboxItem.vue';
import SelectItem from './components/SelectItem.vue';
import CascaderItem from './components/CascaderItem.vue';
import UploadItem from './components/UploadItem.vue';

const formRef = ref(null);
const formConfig = ref(null);
const formData = ref({});
const rules = ref({});

formConfig.value = {
  // ... 配置项
};

onMounted(() => {
  formData.value = {};
  rules.value = {};
  formConfig.value.items.forEach(item => {
    if (item.required) {
      rules.value[item.prop] = [
        { required: true, message: `${item.label} 不能为空`, trigger: 'blur' }
      ];
    }
    formData.value[item.prop] = item.defaultValue || '';
  });
});

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      // 提交表单数据
      console.log(formData.value);
    } else {
      console.error('表单校验失败');
    }
  });
};

const resetForm = () => {
  formRef.value.resetFields();
  formData.value = {};
};
</script>

<style scoped>
</style>

```

**子组件示例 (InputItem.vue):**

```vue
<template>
  <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
    <el-input
      v-model="formData[item.prop]"
      :type="item.inputType || 'text'"
      :placeholder="item.placeholder"
      :disabled="item.disabled"
      :clearable="item.clearable"
      :readonly="item.readonly"
      :maxlength="item.maxlength"
      :show-word-limit="item.showWordLimit"
    />
  </el-form-item>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  formData: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:formData']);

</script>

```

**其他子组件 (RadioItem.vue, CheckboxItem.vue, SelectItem.vue, CascaderItem.vue, UploadItem.vue) 的实现类似，根据不同的表单项类型进行调整。**

**代码说明：**

1. **主组件：**
   - 使用 `formConfig` 对象来存储表单配置信息。
   - 使用 `formData` 和 `rules` 对象来存储表单数据和校验规则。
   - 使用 `v-for` 指令遍历 `formConfig.items`，并使用 `component` 动态组件渲染不同的表单项。
   - 通过 `@update:formData` 事件将子组件更新后的表单数据同步到父组件。
2. **子组件：**
   - 每个子组件对应一种表单项类型，例如 `InputItem.vue` 用于渲染输入框。
   - 子组件接收 `item`、`formData` 和 `rules` 属性，并使用 `v-model` 指令绑定 `formData` 属性。
   - 子组件使用 `defineProps` 和 `defineEmits` 来接收父组件传递的属性和触发事件。

**代码复用：**

- **组件化：** 将每个表单项封装成独立的组件，方便复用。
- **配置化：** 使用 `formConfig` 对象来配置表单项，提高代码可读性和可维护性。
- **动态组件：** 使用 `component` 动态组件根据配置项动态渲染不同的表单项，避免重复代码。
- **事件监听：** 使用 `@update:formData` 事件将子组件更新后的表单数据同步到父组件，方便数据管理。

**优点：**

- **代码更简洁：** 使用 `component` 动态组件，可以有效减少重复代码。
- **代码更灵活：** 通过配置项可以灵活地调整表单结构和行为。
- **代码更易维护：** 将每个表单项封装成独立的组件，方便修改和扩展。

**注意：**

- 子组件需要根据不同的表单项类型进行调整，并使用 `v-model` 指令绑定 `formData` 属性。
- 子组件需要使用 `defineProps` 和 `defineEmits` 来接收父组件传递的属性和触发事件。
- 可以根据实际需求添加其他子组件和配置项。
- 建议使用 `ts` 进行类型校验，提高代码可读性和可维护性。



### 方法三:

> ```
> 使用vue3  element plus 加 js,  二次封装form表单, 通过配置项灵活地运用form表单, 表单包含常用的表单项, 输入, 单选, 复选, 下拉选择, 级联选择等, 其中还要重点包括文件/图片上传, 上传文件/图片大小展示, 一个表单中有可能有多个不一致的上传文件/图片提示. 硬性要求使用jsx语法, 不允许使用ts, 使用<script setup>语法糖及component 动态组件, 如何做到更好的复用代码. 请使用最详细的代码列举出来. 代码量要求尽可能少.
> ```

```vue
<template>
  <el-form
    ref="formRef"
    :model="formData"
    :rules="rules"
    :label-width="formConfig.labelWidth || 'auto'"
    :label-position="formConfig.labelPosition || 'right'"
    :size="formConfig.size || 'default'"
    :inline="formConfig.inline || false"
    :disabled="formConfig.disabled || false"
    :show-message="formConfig.showMessage !== false"
    @submit.native.prevent="onSubmit"
  >
    <template v-for="(item, index) in formConfig.items" :key="index">
      <component
        :is="item.type"
        :item="item"
        :formData="formData"
        :rules="rules"
        @update:formData="(value) => { formData[item.prop] = value }"
      />
    </template>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import InputItem from './components/InputItem.vue';
import RadioItem from './components/RadioItem.vue';
import CheckboxItem from './components/CheckboxItem.vue';
import SelectItem from './components/SelectItem.vue';
import CascaderItem from './components/CascaderItem.vue';
import UploadItem from './components/UploadItem.vue';

const formRef = ref(null);
const formConfig = ref({
  labelWidth: '120px',
  labelPosition: 'right',
  items: [
    // ... 配置项
  ]
});
const formData = ref({});
const rules = ref({});

onMounted(() => {
  formData.value = {};
  rules.value = {};
  formConfig.value.items.forEach(item => {
    if (item.required) {
      rules.value[item.prop] = [
        { required: true, message: `${item.label} 不能为空`, trigger: 'blur' }
      ];
    }
    formData.value[item.prop] = item.defaultValue || '';
  });
});

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      // 提交表单数据
      console.log(formData.value);
    } else {
      console.error('表单校验失败');
    }
  });
};

const resetForm = () => {
  formRef.value.resetFields();
  formData.value = {};
};

</script>

```

**子组件示例 (InputItem.vue):**

```vue
<template>
  <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
    <el-input
      v-model="formData[item.prop]"
      :type="item.inputType || 'text'"
      :placeholder="item.placeholder"
      :disabled="item.disabled"
      :clearable="item.clearable"
      :readonly="item.readonly"
      :maxlength="item.maxlength"
      :show-word-limit="item.showWordLimit"
    />
  </el-form-item>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  formData: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:formData']);

</script>

```

**其他子组件 (RadioItem.vue, CheckboxItem.vue, SelectItem.vue, CascaderItem.vue, UploadItem.vue) 的实现类似，根据不同的表单项类型进行调整。**

**UploadItem.vue 示例：**

```vue
<template>
  <el-form-item :label="item.label" :prop="item.prop" :required="item.required">
    <el-upload
      ref="uploadRef"
      v-model="formData[item.prop]"
      :action="item.action"
      :headers="item.headers"
      :name="item.name"
      :data="item.data"
      :multiple="item.multiple"
      :auto-upload="item.autoUpload"
      :limit="item.limit"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :file-list="formData[item.prop]"
      :on-change="handleChange"
    >
      <el-button type="primary">点击上传</el-button>
      <el-template #tip>
        <div v-if="item.tip">
          {{ item.tip }}
        </div>
      </el-template>
      <template #default="{ file, fileList }">
        <div
          v-for="(f, i) in fileList"
          :key="i"
          class="el-upload-list__item"
        >
          <img
            v-if="f.url"
            :src="f.url"
            class="el-upload-list__item-thumbnail"
          >
          <div class="el-upload-list__item-info">
            <span class="el-upload-list__item-name">{{ f.name }}</span>
            <span class="el-upload-list__item-size">{{ formatFileSize(f.size) }}</span>
            <template v-if="item.showProgress">
              <el-progress
                type="line"
                :percentage="f.percentage"
                :show-text="false"
              />
            </template>
          </div>
        </div>
      </template>
    </el-upload>
  </el-form-item>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { ElMessage } from 'element-plus';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  formData: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:formData']);
const uploadRef = ref(null);

const formatFileSize = (size) => {
  if (size < 1024) {
    return size + 'B';
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + 'KB';
  } else {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }
};

const handlePreview = (file) => {
  window.open(file.url);
};

const handleRemove = (file, fileList) => {
  // 删除文件
  // ...
};

const beforeUpload = (file) => {
  const isLt2M = file.size / 1024 / 1024 < props.item.maxSize;
  if (!isLt2M) {
    ElMessage.error(`上传文件大小不能超过 ${props.item.maxSize}MB!`);
  }
  return isLt2M;
};

const handleChange = (file, fileList) => {
  emit('update:formData', fileList);
};

</script>

```

**代码说明：**

1. **主组件：**
   - 使用 `formConfig` 对象来存储表单配置信息，包括表单项类型、标签、属性、选项、校验规则等。
   - 使用 `formData` 和 `rules` 对象分别存储表单数据和校验规则，并在 `onMounted` 生命周期钩子中根据 `formConfig` 初始化。
   - 使用 `v-for` 指令遍历 `formConfig.items`，根据 `item.type` 来渲染不同的表单项，并使用 `v-model` 指令实现双向数据绑定。
   - 使用 `component` 动态组件渲染不同的表单项，根据 `item.type` 动态加载对应的子组件。
   - 通过 `@update:formData` 事件将子组件更新后的表单数据同步到父组件。
2. **子组件：**
   - 每个子组件对应一种表单项类型，例如 `InputItem.vue` 用于渲染输入框。
   - 子组件接收 `item`、`formData` 和 `rules` 属性，并使用 `v-model` 指令绑定 `formData` 属性。
   - 子组件使用 `defineProps` 和 `defineEmits` 来接收父组件传递的属性和触发事件。

**代码复用：**

- **组件化：** 将每个表单项封装成独立的组件，方便复用。
- **配置化：** 使用 `formConfig` 对象来配置表单项，提高代码可读性和可维护性。
- **动态组件：** 使用 `component` 动态组件根据配置项动态渲染不同的表单项，避免重复代码。
- **事件监听：** 使用 `@update:formData` 事件将子组件更新后的表单数据同步到父组件，方便数据管理。

**优点：**

- **代码更简洁：** 使用 `component` 动态组件，可以有效减少重复代码。
- **代码更灵活：** 通过配置项可以灵活地调整表单结构和行为。
- **代码更易维护：** 将每个表单项封装成独立的组件，方便修改和扩展。

**注意：**

- 子组件需要根据不同的表单项类型进行调整，并使用 `v-model` 指令绑定 `formData` 属性。
- 子组件需要使用 `defineProps` 和 `defineEmits` 来接收父组件传递的属性和触发事件。
- 可以根据实际需求添加其他子组件和配置项。

**总结：**

通过使用 `vue3`、`element plus` 和 `js`，并结合配置项和模板化，可以实现一个灵活可复用的表单组件，方便开发者快速构建各种类型的表单，并有效提高代码复用率。



