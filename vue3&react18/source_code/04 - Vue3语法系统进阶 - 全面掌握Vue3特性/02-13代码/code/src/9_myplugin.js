import * as http from '@/5_http.js'

export default {
  install(app, options){
    console.log(options);

    app.config.globalProperties.$http = http;

    app.directive('auth', (el, binding) => {
      let auths = ['edit', 'delete'];
      let ret = auths.includes(binding.value);
      if(!ret){
        el.style.display = 'none';
      }
    });

    app.component('my-head', {
      template: `<div>hello myhead</div>`
    })
  }
}