import { createStore } from "vuex";

const store = createStore({
  state: {
    todoList: [
      {
        isChecked: true, id: 1, task: '第一个任务'
      },
      {
        isChecked: false, id: 2, task: '第二个任务'
      }
    ]
  },
  actions: {
    
  },
  mutations: {
    add(state, payload){
      state.todoList.unshift({ isChecked: false, id: state.todoList.length, task: payload });
    }
  },
  getters: {
    complete(state){
      return state.todoList.filter((v)=> v.isChecked)
    },
    incomplete(state){
      return state.todoList.filter((v)=> !v.isChecked)
    }
  }
});

export default store;