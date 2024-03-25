import http from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'

type GetTime = {
  userid: unknown
}
type PutTime = {
  userid: unknown
}
type Infos = {
  [index: string]: unknown
}

export const useSignsStore = defineStore('signs', () => {
  const infos = ref<Infos>({})
  function getTimeAction(payload: GetTime){
    return http.get('/signs/time', payload);
  }
  function putTimeAction(payload: PutTime){
    return http.put('/signs/time', payload);
  }
  function updateInfos(payload: Infos){
    infos.value = payload;
  }

  return { 
    infos,
    getTimeAction,
    putTimeAction,
    updateInfos
  }
})
