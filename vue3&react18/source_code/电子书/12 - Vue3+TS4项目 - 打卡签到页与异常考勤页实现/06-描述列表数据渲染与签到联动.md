# 描述列表数据渲染与签到联动

## 描述列表数据渲染

在`/src/utils/http.ts`文件中进行请求拦截器的设置，代码如下：

```vue
<script setup lang="ts">
watchEffect((reset)=>{
  const detailMonth = ((signsInfos.value.detail as {[index: string]: unknown})[toZero(month.value)] as {[index: string]: unknown})
  for(const attr in detailMonth){
    switch( detailMonth[attr] ){
      case DetailKey.normal:
        detailValue.normal++
        break
      case DetailKey.absent:
        detailValue.absent++
        break
      case DetailKey.miss:
        detailValue.miss++
        break
      case DetailKey.late:
        detailValue.late++
        break
      case DetailKey.early:
        detailValue.early++
        break
      case DetailKey.lateAndEarly:
        detailValue.lateAndEarly++
        break
    }
  }
  for(const attr in detailValue){
    if( attr !== 'normal' && detailValue[attr as keyof typeof detailValue] !== 0){
      detailState.type = 'danger'
      detailState.text = '异常'
    }
  }
  reset(()=>{
    detailState.type = 'success'
    detailState.text = '正常'
    for(const attr in detailValue){
      detailValue[attr as keyof typeof detailValue] = 0
    }
  })
})
</script>
```

当点击签到按钮的时候，就可以再次触发watchEffect方法。
