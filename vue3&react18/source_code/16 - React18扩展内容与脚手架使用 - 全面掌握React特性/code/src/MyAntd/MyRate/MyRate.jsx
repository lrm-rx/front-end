import React from 'react'
import './MyRate.scss'
import '../../iconfont/iconfont.css'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function MyRate(props) {
  const [ clickValue, setClickValue ] = useState(props.value)
  const [ mouseValue, setMouseValue ] = useState(props.value)
  const stars = [];
  const handleMouseEnter = (index) => {
    return () => {
      setMouseValue(index+1)
    }
  }
  const handleMouseLeave = () => {
    setMouseValue(clickValue)
  }
  const handleMouseDown = (index) => {
    return () => {
      setClickValue(index+1)
      props.onChange(index+1)
    }
  }
  for(let i=0;i<props.count;i++){
    const rateClass = classnames({
      iconfont: true,
      'icon-xingxing': true,
      active: mouseValue > i ? true : false
    })
    stars.push(<i key={i} className={rateClass} onMouseEnter={handleMouseEnter(i)} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown(i)}></i>);
  }
  return (
    <div className="my-rate">{stars}</div>
  )
}
MyRate.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
}
MyRate.defaultProps = {
  count: 5,
  value: 0,
  onChange: function(){}
}
