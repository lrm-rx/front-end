//import React from 'react'

/* import './Welcome.css'

export default function Welcome() {
  return (
    <div className='Welcome'>
      <div className='box'>Welcome</div>
      <div className='box2'>Welcome</div>
    </div>
  )
} */

/* import './Welcome.scss'

export default function Welcome() {
  return (
    <div className='Welcome'>
      <div className='box'>Welcome</div>
      <div className='box2'>Welcome</div>
    </div>
  )
} */

/* import style from './Welcome.module.css'

export default function Welcome() {
  return (
    <div>
      <div className={style.box}>Welcome</div>
      <div className={style.box2}>Welcome</div>
    </div>
  )
} */

/* import style from './Welcome.module.scss'

export default function Welcome() {
  return (
    <div>
      <div className={style.box}>Welcome</div>
      <div className={style.box2}>Welcome</div>
    </div>
  )
} */

/* import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
  background: red;
`;

const Text = styled.a`
  color: blue;
  background: red;
  &:hover {
    color: yellow;
  };
`;

export default function Welcome() {
  return (
    <div>
      <Title>我是一个标题</Title>
      <Text href="http://www.imooc.com">我是一个链接</Text>
    </div>
  )
}
 */

import './Welcome.css'
import classnames from 'classnames'

console.log('welcome');

export default function Welcome() {
  //const myClass = 'box box2'
  const myClass = classnames({
    box: true,
    box2: true
  })
  return (
    <div className='Welcome'>
      <h2 className={myClass}>这是一个标题</h2>
    </div>
  )
}

