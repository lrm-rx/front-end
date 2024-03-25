
import { createApp } from 'vue';
import ModalVue from '@/23_模态框.vue';

function modal(){
  let div = document.createElement('div');
  createApp(ModalVue).mount(div);
  document.body.append(div);
}

export default modal;