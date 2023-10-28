import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import * as Echarts from "echarts";
import { Button, Space, message } from 'antd';
import { Navigate, useNavigate } from "react-router-dom"
import request from "../request"
import "./style.css"

type EChartsOption = echarts.EChartsOption

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const pieOption: EChartsOption = {
    title: {
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: "下载"
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }

  const [options, setOptions] = useState(pieOption)

  useEffect(() => {
    request.get("/api/isLogin").then(res => {
      if (!res?.data) {
        setIsLogin(false)
      }
    }).catch(error => {
      message.error(error)
    })
  }, [isLogin])

  useEffect(() => {
    request.get("/api/showData").then(res => {
      if (res?.data) {
        console.log(res.data)
      } else {
        message.error("展示数据失败!")
      }
    }).catch(error => {
      message.error(error)
    })
  })

  const chartpie: MutableRefObject<any> = useRef(null);
  const chartInit = () => {
    const mychartpie = Echarts.init(chartpie.current);
    mychartpie.setOption(options, true);
    window.onresize = () => {
      mychartpie.resize();
    };
  };

  useEffect(() => {
    chartInit();
    return () => {
      window.onresize = null;
    };
  });

  const logout = () => {
    request.get("/api/logout").then(res => {
      if (res?.data) {
        navigate("/login")
      }
    }).catch(error => {
      message.error(error)
    })
  }

  const changeData = () => {
    setOptions({
      ...options,
      title: {
        text: '折线图堆叠~~~~'
      },
    })
  }

  const handleCrowllerClick = () => {
    request.get("/api/getData").then(res => {
      if (res?.data) {
        message.success("抓取成功!")
      } else {
        message.error("抓取失败!")
      }
    }).catch(error => {
      message.error(error)
    })
  }

  if (!isLogin) {
    return <Navigate to="/login"></Navigate>;
  }
  return <>
    <div className="home-page">
      <Space wrap>
        <Button type="primary" onClick={handleCrowllerClick}>抓取</Button>
        <Button type="primary">展示</Button>
        <Button type="primary" onClick={changeData}>修改数据</Button>
        <Button type="primary" onClick={logout}>退出</Button>
      </Space>
    </div>
    <div ref={chartpie} className="chartbox"></div>
  </>
}

export default Home;