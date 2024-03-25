import React, { useEffect } from 'react'
import styles from '../Home.module.scss'
import classNames from 'classnames'
import { Dropdown, Badge, Space, Avatar } from 'antd'
import type { MenuProps } from 'antd';
import { BellOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store';
import type { RootState } from '../../../store';
import { clearToken } from '../../../store/modules/users';
import { getRemindAction, updateInfo } from '../../../store/modules/news';
import type { Info } from '../../../store/modules/news';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
  const name = useSelector((state: RootState)=> state.users.infos.name) as string 
  const head = useSelector((state: RootState)=> state.users.infos.head) as string
  const _id = useSelector((state: RootState)=> state.users.infos._id) as string
  const newsInfo = useSelector((state: RootState)=> state.news.info)
  const dispatch = useAppDispatch()

  const isDot = (newsInfo.applicant || newsInfo.approver) as boolean | undefined;

  useEffect(()=>{
    dispatch(getRemindAction({userid: _id})).then((action)=>{
      const { errcode, info } = (
        action.payload as { [index: string]: unknown }
      ).data as { [index: string]: unknown }
      if (errcode === 0) {
        dispatch(updateInfo(info as Info))
      }
    })
  }, [dispatch, _id])

  const handleLogut = () => {
    dispatch(clearToken())
    setTimeout(()=>{
      window.location.replace('/login')
    })
  }

  const items1: MenuProps['items'] = []

  if( newsInfo.applicant ){
    items1.push({
      key: '1',
      label: <Link to="/apply">有审批结果消息</Link>
    })
  }
  if( newsInfo.approver ){
    items1.push({
      key: '2',
      label: <Link to="/check">有审批请求消息</Link>
    })
  }
  if(!newsInfo.applicant && !newsInfo.approver){
    items1.push({
      key: '3',
      label: <div>暂无消息</div>
    })
  }

  const items2: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div>个人中心</div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={handleLogut}>退出</div>
      ),
    }
  ]

  return (
    <div className={styles['home-header']}>
      <span className={styles['home-header-logo']}>
        <i className={classNames('iconfont icon-react', styles['icon-react'])}></i>
        <i className={classNames('iconfont icon-icon-test', styles['icon-icon-test'])}></i>
        <i className={classNames('iconfont icon-typescript', styles['icon-typescript'])}></i>
      </span>
      <span className={styles['home-header-title']}>在线考勤系统</span>
      <Dropdown menu={{ items: items1 }} arrow placement="bottom">
        <Badge dot={isDot}>
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>
      </Dropdown>
      <Dropdown menu={{ items: items2 }} arrow placement="bottom">
        <Space className={styles['home-header-space']}>
          <Avatar src={head} size="large" /> {name}
        </Space>
      </Dropdown>
    </div>
  )
}
