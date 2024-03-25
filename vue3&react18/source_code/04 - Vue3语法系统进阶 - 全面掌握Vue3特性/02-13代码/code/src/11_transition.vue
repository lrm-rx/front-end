<template>
  <div>
    <h2>hello transition</h2>
    <button @click=" isShow = !isShow ">点击</button>
    <transition name="slide" mode="out-in">
      <div v-if="isShow" class="box"></div>
      <div v-else class="box2"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background: skyblue;
}
.box2{
  width: 200px;
  height: 200px;
  background: pink;
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: 1s;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: 1s;
}

.slide-enter-from{
  opacity: 0;
  transform: translateX(200px);
}
.slide-enter-to{
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active{
  transition: 1s;
}

.slide-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-to{
  opacity: 0;
  transform: translateX(200px);
}
.slide-leave-active{
  transition: 1s;
}
</style>