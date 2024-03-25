
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'

export interface UsersState {
  username: string
  age: number
}

const state: UsersState = {
  username: 'xiaoming',
  age: 20
};

const mutations: MutationTree<UsersState> = {
  // change(state){
    
  // }
};
const actions: ActionTree<UsersState, State> = {};
const getters: GetterTree<UsersState, State> = {
  doubleAge(state){
    return state.age * 2;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}