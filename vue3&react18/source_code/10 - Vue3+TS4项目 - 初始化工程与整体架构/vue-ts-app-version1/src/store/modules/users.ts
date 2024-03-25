import http from '@/utils/http';
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'

export interface UsersState {
}

const state: UsersState = {
};

const mutations: MutationTree<UsersState> = {
};
const actions: ActionTree<UsersState, State> = {
  login(){
    return http.post('/users/login')
  }
};
const getters: GetterTree<UsersState, State> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}