export default {
  npmClient: 'pnpm',
  clientLoader: {},
  routes: [
    { path: '/user', component: 'user' },
    { 
      path: '/login', 
      component: '@/pages/login',
      routes: [
        {
          path: 'foo',
          component: '@/pages/foo',
          wrappers: [
            '@/wrappers/auth',
          ]
        }
      ]
    },
  ]
};
