
const myMixin = {
  data(){
    return {
      message: '复用的数据'
    }
  },
  computed: {
    message2(){
      return '复用的数据2'
    }
  }
};

export {
  myMixin
}