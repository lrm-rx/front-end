# 详解不常见生命周期钩子函数

不常见的生命周期钩子函数有以下几个：

- getDerivedStateFromProps：props派生state的值
- shouldComponentUpdate：优化render渲染次数
- getSnapshotBeforeUpdate：DOM更新前的快照

## getDerivedStateFromProps

这个钩子主要是由props来决定state的值，这个需求比较少，下面来看例子。

```jsx
class Welcome extends React.Component {
    state = {
        isAdd: false,
        lastNow: 0
    }
    static getDerivedStateFromProps = (props, state) => {
        return {
            isAdd: props.currentNow > state.lastNow,
            lastNow: props.currentNow
        }
    }
    render(){
        return (
            <div>
                { this.state.isAdd ? '累加' : '累减' }, { this.state.lastNow }
            </div>
        );
    }
}
let now = 0;
let dir = 1;
setInterval(()=>{
    if(now === 0){
        dir = 1;
    }
    else if(now === 5){
        dir = -1;
    }
    now += dir;
    let element = (
        <Welcome currentNow={now} />
    );
    root.render(element);
}, 1000)
```

 通过props的变化来决定state的值，可以完成一些界面的更新操作。

## shouldComponentUpdate

根据返回的结果的不同，选择性进行渲染，是进行性能优化的一种手段，这个钩子在前面学习PureComponent小节中就已经学习到了，这里不再赘述该如何使用。

## getSnapshotBeforeUpdate

这个钩子可以触发DOM更新前的快照，可以把更新前的一些数据通过return提供出来，并通过`componentDidUpdate`钩子的第三个参数进行接收。

可以利用这一点来进行DOM前后对比的差异比较，代码如下：

```jsx
class Welcome extends React.Component {
    state = {
        list: ['a', 'b', 'c']
    }
    myRef = React.createRef()
    handleClick = () => {
        this.setState({
            list: [...this.state.list, 'd', 'e', 'f']
        })
    }
    getSnapshotBeforeUpdate = (props, state) => {
        return this.myRef.current.offsetHeight;
    }
    componentDidUpdate = (props, state, snapshot) => {
        console.log( this.myRef.current.offsetHeight - snapshot );
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <ul ref={this.myRef}>
                    { this.state.list.map((v, i)=> <li key={i}>{v}</li>) }
                </ul>
            </div>
        );
    }
}
```
