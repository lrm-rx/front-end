import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist';
import message from '@/store/modules/message'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({count: state.count})
})

const store = createStore({
  state: {
    count: 0
  },
  actions: {
    change(context, payload){
      setTimeout(()=>{
        context.commit('change', payload)
      }, 1000)
    }
  },
  mutations: {
    change(state, payload){
      /* setTimeout(()=>{
        state.count++;
      }, 1000) */
      state.count += payload;
    }
  },
  getters: {
    doubleCount(state){
      return state.count * 2;
    }
  },
  plugins: [vuexLocal.plugin],
  modules: {
    message
  }
});

export default store;