# 添加路由权限及登录拦截.

## 添加路由权限

在上一章中，我们已经对路由表做了meta元信息的权限配置，在本小节中就可以利用meta元信息进行权限判断，通过全局守卫来完成权限的判断。

```typescript
// /src/router/index.ts
router.beforeEach((to, from, next)=>{
  const token = (store.state as StateAll).users.token;
  const infos = (store.state as StateAll).users.infos;
  if( to.meta.auth && _.isEmpty(infos) ){
    if(token){
      store.dispatch('users/infos').then((res)=>{
        if(res.data.errcode === 0){
          store.commit('users/updateInfos', res.data.infos)
          next()
        }
      });
    }
    else{
      next('/login');
    }
  }
  else{
    if( token && to.path === '/login' ){
      next('/');
    }
    else{
      next();
    }
  }
})
```

```typescript
// /store/modules/users.ts
const state: UsersState = {
  infos: {}
};
const mutations: MutationTree<UsersState> = {
  updateInfos(state, payload){
    state.infos = payload;
  }
};
const actions: ActionTree<UsersState, State> = {
  infos(){
    return http.get('/users/infos')
  }
};
```

这里判断`to.meta.auth`是否需要权限访问，然后再去校验token是否合法，通过调用`users/infos`这个接口，当然我们在调用这个接口的时候，需要把token挂在到请求头信息中。

下一小节来看一下如何挂载请求头。



