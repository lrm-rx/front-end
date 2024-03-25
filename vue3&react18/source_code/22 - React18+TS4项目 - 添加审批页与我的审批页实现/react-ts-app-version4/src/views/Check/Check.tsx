import React, { useState, useEffect } from 'react'
import styles from './Check.module.scss'
import { Row, Space, Input, Button, Divider, Radio, Table, message } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { SearchOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import type { RootState } from '../../store'
import _ from 'lodash'
import type { ColumnsType } from 'antd/es/table'
import type { Infos } from '../../store/modules/checks'
import { getApplyAction, putApplyAction, updateCheckList } from '../../store/modules/checks'
import { putRemindAction, updateInfo } from '../../store/modules/news'
import type { Info } from '../../store/modules/news'

const approverTypes = [
  {label: '全部', value: '全部'},
  {label: '待审批', value: '待审批'},
  {label: '已通过', value: '已通过'},
  {label: '未通过', value: '未通过'}
];
const defaultType = approverTypes[0].value;

export default function Check() {
  const [ approverType, setApproverType ] = useState(defaultType)
  const [ searchWord, setSearchWord ] = useState('')
  const usersInfos = useSelector((state: RootState)=> state.users.infos)
  const checkList = useSelector((state: RootState)=> state.checks.checkList).filter((v)=> (v.state === approverType || defaultType === approverType) && (v.note as string).includes(searchWord)) 
  const newsInfo = useSelector((state: RootState)=> state.news.info)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (_.isEmpty(checkList)) {
      dispatch(getApplyAction({ approverid: usersInfos._id as string })).then(
        (action) => {
          const { errcode, rets } = (
            action.payload as { [index: string]: unknown }
          ).data as { [index: string]: unknown }
          if (errcode === 0) {
            dispatch(updateCheckList(rets as Infos[]))
          }
        }
      )
    }
  }, [checkList, usersInfos, dispatch])

  useEffect(() => {
    if ( newsInfo.approver ) {
      dispatch(putRemindAction({userid: usersInfos._id as string, approver: false})).then((action)=>{
        const { errcode, info } = (
          action.payload as { [index: string]: unknown }
        ).data as { [index: string]: unknown }
        if (errcode === 0) {
          dispatch(updateInfo(info as Info))
        }
      })
    }
  }, [dispatch, usersInfos, newsInfo]);

  const handlePutApply = (_id: string, state: '已通过'|'未通过', applicantid: string) => {
    return () => {
      dispatch(putApplyAction({_id, state})).then((action)=>{
        const { errcode } = (
          action.payload as { [index: string]: unknown }
        ).data as { [index: string]: unknown }
        if (errcode === 0) {
          message.success('审批成功');
          dispatch(getApplyAction({ approverid: usersInfos._id as string })).then(
            (action) => {
              const { errcode, rets } = (
                action.payload as { [index: string]: unknown }
              ).data as { [index: string]: unknown }
              if (errcode === 0) {
                dispatch(updateCheckList(rets as Infos[]))
              }
            }
          )
          dispatch(putRemindAction({ userid: applicantid, applicant: true }))
        }
      })
    }
  }

  const columns: ColumnsType<Infos> = [
    {
      title: '申请人',
      dataIndex: 'applicantname',
      key: 'applicantname',
      width: 180
    },
    {
      title: '审批事由',
      dataIndex: 'reason',
      key: 'reason',
      width: 180
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      render(_){
        return _.join(' - ')
      }
    },
    {
      title: '备注',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: '操作',
      dataIndex: 'handle',
      key: 'handle',
      width: 180,
      render(_, record){
        return (
          <Space>
            <Button type="primary" shape="circle" size="small" icon={<CheckOutlined />} style={{backgroundColor: '#67c23a', border: '1px #67c23a solid'}} onClick={handlePutApply(record._id as string, '已通过', record.applicantid as string)} />
            <Button type="primary" danger shape="circle" size="small" icon={<CloseOutlined />} onClick={handlePutApply(record._id as string, '未通过', record.applicantid as string)} />
          </Space>
        )
      }
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      width: 180
    }
  ];
  const approverTypeChange = (ev: RadioChangeEvent) => {
    setApproverType(ev.target.value)
  }
  const searchWordChange  = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(ev.target.value)
  }
  return (
    <div>
      <Row className={styles['check-title']} justify="end">
        <Space>
          <Input placeholder="请输入搜索关键词" value={searchWord} onChange={searchWordChange} />
          <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          <Divider style={{ borderLeftColor: '#dcdfe6' }} type="vertical" />
          <Radio.Group
            options={approverTypes}
            optionType="button"
            buttonStyle="solid"
            value={approverType}
            onChange={approverTypeChange}
          />
        </Space>
      </Row>
      <Table rowKey="_id" className={styles['check-table']} dataSource={checkList} columns={columns} bordered size="small" pagination={{defaultPageSize: 5}} />
    </div>
  )
}