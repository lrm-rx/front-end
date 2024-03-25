
import './Welcome.css'
import classnames from 'classnames'

console.log('welcome2');

export default function Welcome() {
  //const myClass = 'box box2'
  const myClass = classnames({
    box: true,
    box2: true
  })
  return (
    <div className='Welcome'>
      <h2 className={myClass}>这是另一个标题</h2>
    </div>
  )
}

