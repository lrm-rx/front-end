import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import {
  CopyOutlined,
  CalendarOutlined,
  WarningOutlined,
  FileAddOutlined,
  ScheduleOutlined,
} from '@ant-design/icons'

const Home = lazy(()=> import('../views/Home/Home'))
const Sign = lazy(()=> import('../views/Sign/Sign'))
const Exception = lazy(()=> import('../views/Exception/Exception'))
const Apply = lazy(()=> import('../views/Apply/Apply'))
const Check = lazy(()=> import('../views/Check/Check'))
const Login = lazy(()=> import('../views/Login/Login'))
const BeforeEach = lazy(()=> import('../components/BeforeEach/BeforeEach'))


declare module 'react-router' {
  interface IndexRouteObject {
    meta?: {
      menu?: boolean
      title?: string
      icon?: React.ReactNode 
      auth?: boolean
    }
  }
  interface NonIndexRouteObject {
    meta?: {
      menu?: boolean
      title?: string
      icon?: React.ReactNode  
      auth?: boolean
    }
  }
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(BeforeEach, null, React.createElement(Home)),
    meta: {
      menu: true,
      title: '考勤管理',
      icon: React.createElement(CopyOutlined),
      auth: true
    },
    children: [
      {
        path: 'sign',
        element: React.createElement(Sign),
        meta: {
          menu: true,
          title: '在线打卡签到',
          icon: React.createElement(CalendarOutlined),
          auth: true
        }
      },
      {
        path: 'exception',
        element: React.createElement(Exception),
        meta: {
          menu: true,
          title: '异常考勤查询',
          icon: React.createElement(WarningOutlined),
          auth: true,
        }
      },
      {
        path: 'apply',
        element: React.createElement(Apply),
        meta: {
          menu: true,
          title: '添加考勤审批',
          icon: React.createElement(FileAddOutlined),
          auth: true,
        }
      },
      {
        path: 'check',
        element: React.createElement(Check),
        meta: {
          menu: true,
          title: '我的考勤审批',
          icon: React.createElement(ScheduleOutlined),
          auth: true,
        }
      }
    ]
  },
  {
    path: '/login',
    element: React.createElement(BeforeEach, null, React.createElement(Login))
  }
];

const router = createBrowserRouter(routes)

export default router;