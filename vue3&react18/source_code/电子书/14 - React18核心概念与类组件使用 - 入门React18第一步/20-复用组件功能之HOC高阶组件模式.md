# 复用组件功能之HOC高阶组件模式

## HOC高阶组件

除了Render Props模式可以复用组件外，还可以利用HOC高阶组件来实现，他是React 中用于复用组件逻辑的一种高级技巧，具体而言，就是参数为组件，返回值为新组件的函数。

```jsx
function withMouseXY(WithComponent){
    return class extends React.Component {
        state = {
            x: 0,
            y: 0
        }
        componentDidMount = () => {
            document.addEventListener('mousemove', this.move)
        }
        componentWillUnmount = () => {
            document.removeEventListener('mousemove', this.move)
        }
        move = (ev) => {
            this.setState({
                x: ev.pageX,
                y: ev.pageY 
            })
        }
        render(){
            return <WithComponent {...this.state} />
        }
    }
}
class Welcome extends React.Component {
    render(){
        return (
            <div>
                hello world, { this.props.x }, { this.props.y }
            </div>
        );
    }
}
const MouseWelcome = withMouseXY(Welcome)
let element = (
    <MouseWelcome />
);
```
