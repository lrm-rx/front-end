import { createStore, useStore as baseUseStore } from 'vuex'
import users from './modules/users'
import type { UsersState } from './modules/users'
import type { Store } from 'vuex'
import type { InjectionKey } from 'vue'

export interface State {
  count: number
}

interface StateAll extends State {
  users: UsersState
}

export const key: InjectionKey<Store<StateAll>> = Symbol()

export function useStore () {
  return baseUseStore(key)
}

export default createStore<State>({
  state: {
    count: 1
  },
  getters: {
    doubleCount(state){
      return state.count * 2;
    }
  },
  mutations: {
    // add(state, payload: number){

    // }
  },
  actions: {
  },
  modules: {
    users
  }
})
