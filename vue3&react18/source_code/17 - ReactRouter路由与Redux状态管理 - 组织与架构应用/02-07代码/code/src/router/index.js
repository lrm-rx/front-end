import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, Navigate, redirect } from 'react-router-dom'
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Foo from '../views/Foo/Foo';
import Bar from '../views/Bar/Bar';
import App from '../App';
import BeforeEach from '../components/BeforeEach/BeforeEach';

//路由表
export const routes = [
  {
    path: '/',
    element: <BeforeEach><App /></BeforeEach>,
    //errorElement: <div>404</div>,
    children: [
      {
        path: '',
        element: <Home />,
        meta: { title: 'home' }
      },
      {
        path: 'about',
        element: <About />,
        meta: { title: 'about' },
        children: [
          {
            index: true,
            //element: <div>默认的内容</div>
            element: <Navigate to="/about/foo/123" />,
            meta: { title: 'foo', auth: false },
          },
          {
            path: 'foo/:id',
            element: <Foo />,
            meta: { title: 'foo', auth: false },
          },
          {
            path: 'bar',
            element: <Bar />,
            meta: { title: 'bar', auth: true },
            loader: async() => {
              //console.log('bar')
              /* let ret = await new Promise((resolve)=>{
                setTimeout(()=>{
                  resolve({errcode: 0})
                }, 2000)
              })
              return ret; */
              /* let ret = await new Promise((resolve)=>{
                setTimeout(()=>{
                  resolve({errcode: Math.random() > 0.5 ? 0 : -1})
                }, 2000)
              })
              if(ret.errcode === 0){
                return ret;
              }
              else{
                console.log('/login')
                return redirect('/login')
              } */
            }
          },
          {
            path: '*',
            element: <div>404</div>
          }
        ]
      }
    ]
  }
];

//路由表组件写法
/* const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<Home />}></Route>
    <Route path="about" element={<About />}></Route>
  </Route>
) */

const router = createBrowserRouter(routes);

export default router;