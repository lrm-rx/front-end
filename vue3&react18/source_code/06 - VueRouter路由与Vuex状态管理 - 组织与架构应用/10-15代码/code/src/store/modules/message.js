
const state = {
  msg: 'hello'
};
const getters = {
  upperMsg(state){
    return state.msg.toUpperCase()
  }
};
const actions = {};
const mutations = {
  change(state, payload){
    state.msg = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}