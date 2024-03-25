import React, { useState, useEffect } from 'react'
import styles from './Exception.module.scss'
import { Row, Col, Button, Select, Space, Empty, Timeline, Card } from 'antd'
import { Link, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import type { RootState } from '../../store'
import _ from 'lodash'
import {
  getTimeAction,
  updateInfos,
} from '../../store/modules/signs'
import type { Infos } from '../../store/modules/signs'
import { toZero } from '../../utils/common'

let date = new Date()
let year = date.getFullYear()

export default function Exception() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [month, setMonth] = useState( searchParams.get('month') ? Number(searchParams.get('month')) - 1 : date.getMonth())
  const signsInfos = useSelector((state: RootState)=> state.signs.infos)
  const usersInfos = useSelector((state: RootState)=> state.users.infos)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (_.isEmpty(signsInfos)) {
      dispatch(getTimeAction({ userid: usersInfos._id as string })).then(
        (action) => {
          const { errcode, infos } = (
            action.payload as { [index: string]: unknown }
          ).data as { [index: string]: unknown }
          if (errcode === 0) {
            dispatch(updateInfos(infos as Infos))
          }
        }
      )
    }
  }, [signsInfos, usersInfos, dispatch])

  let details;
  if(signsInfos.detail){
    const detailMonth = (signsInfos.detail as { [index: string]: unknown })[
      toZero(month + 1)
    ] as { [index: string]: string }
    details = Object.entries(detailMonth).filter((v)=> v[1]!=='正常出勤').sort()
  }

  const handleChange = (value: number) => {
    setMonth(value)
    setSearchParams({month: String(value+1)})
  }
  const renderTime = (date: string) => {
    const ret = ((signsInfos.time as {[index: string]: unknown})[toZero(month+1)] as {[index: string]: unknown})[date];
    if( Array.isArray(ret) ){
      return ret.join('-');
    }
    else{
      return '暂无打卡记录';
    }
  }
  const monthOptions = [];
  for(let i=0;i<12;i++){
    monthOptions.push(<Select.Option key={i} value={i}>{i+1}月</Select.Option>)
  }
  return (
    <div className={styles.exception}>
      <Row justify="space-between" align="middle">
        <Link to="/apply">
          <Button type="primary">异常处理</Button>
        </Link>
        <Space>
          <Button>{year}年</Button>
          <Select value={month} onChange={handleChange}>
            {monthOptions}
          </Select>
        </Space>
      </Row>
      <Row className={styles['exception-line']} gutter={20}>
        <Col span={12}>
          {
            details
            ?
            <Timeline>
              {
                details.map((item)=> {
                  return (
                    <Timeline.Item key={item[0]}>
                      <h3>{year}/{month+1}/{item[0]}</h3>
                      <Card className={styles['exception-card']}>
                        <Space>
                          <h4>{item[1]}</h4>
                          <p>考勤详情：{renderTime(item[0])}</p>
                        </Space>
                      </Card>
                    </Timeline.Item>
                  )
                })
              }
            </Timeline>
            :
            <Empty description="暂无异常考勤" imageStyle={{height: 200}} />
          }
        </Col>
        <Col span={12}>
          {/* <Empty description="暂无申请审批" imageStyle={{height: 200}} /> */}
          <Timeline>
            <Timeline.Item>
              <h3>事假</h3>
              <Card className={styles['exception-card']}>
                <h4>待审批</h4>
                <p className={styles['exception-content']}>申请日期 2022-12-08 09:08:09 - 2022-12-09 09:08:12</p>
                <p className={styles['exception-content']}>申请详情 aaa</p>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <h3>事假</h3>
              <Card className={styles['exception-card']}>
                <h4>待审批</h4>
                <p className={styles['exception-content']}>申请日期 2022-12-08 09:08:09 - 2022-12-09 09:08:12</p>
                <p className={styles['exception-content']}>申请详情 aaa</p>
              </Card>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  )
}