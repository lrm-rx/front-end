<template>
  <div>
    <h2>setup方法</h2>
    {{ count }}
  </div>
</template>

<script>
export default {
  setup () {
    let count = 0;

    return {
      count
    }
  }
}
</script>

<style lang="scss" scoped>

</style>