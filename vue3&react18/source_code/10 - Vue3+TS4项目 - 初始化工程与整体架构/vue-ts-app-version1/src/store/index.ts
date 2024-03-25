import { createStore, useStore as baseUseStore } from 'vuex'
import type { Store } from 'vuex'
import users from './modules/users'
import signs from './modules/signs'
import checks from './modules/checks'
import news from './modules/news'
import type { UsersState } from './modules/users'
import type { SignsState } from './modules/signs'
import type { ChecksState } from './modules/checks'
import type { NewsState } from './modules/news'
import type { InjectionKey } from 'vue'

export interface State {
}

export interface StateAll extends State {
  users: UsersState,
  signs: SignsState,
  checks: ChecksState,
  news: NewsState
}

export const key: InjectionKey<Store<StateAll>> = Symbol()

export function useStore () {
  return baseUseStore(key)
}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    signs,
    checks,
    news
  }
})
