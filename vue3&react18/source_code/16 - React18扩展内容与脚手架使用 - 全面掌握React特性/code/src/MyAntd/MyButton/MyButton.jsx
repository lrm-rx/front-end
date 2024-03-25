import React from 'react'
import './MyButton.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default function MyButton(props) {
  const buttonClass = classnames({
    'my-button-default': true,
    [`my-button-${props.type}`]: true,
    [`my-button-${props.type}-danger`]: props.danger,
    [`my-button-${props.size}`]: true,
  })
  return (
    <button className={buttonClass}>{ props.icon } { props.children }</button>
  )
}
MyButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  danger: PropTypes.bool,
  icon: PropTypes.element
}
MyButton.defaultProps = {
  type: 'default',
  size: 'middle',
  danger: false
}
