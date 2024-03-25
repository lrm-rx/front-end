# 选项式API的编程风格与优势

选项式API，即：options API

```javascript
let vm = createApp({
  methods: {},
  computed: {},
  watch: {},
  data(){},
  mounted(){}
})
```

这种写法的优势：

- 只有一个参数，不会出现参数顺序的问题，随意调整配置的位置
- 非常清晰，语法化特别强
- 非常适合添加默认值的 