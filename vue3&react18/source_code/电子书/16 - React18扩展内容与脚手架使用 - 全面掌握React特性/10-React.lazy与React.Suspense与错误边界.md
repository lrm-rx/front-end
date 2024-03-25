# React.lazy与React.Suspense与错误边界

## React.lazy与React.Suspense

在React中可以通过React.lazy方法进行组件的异步加载，这样就会做到只有使用的时候才会去加载，从而提升性能。

```jsx
import React, { lazy, Suspense } from 'react'
import { useState } from 'react'
const Welcome = lazy(()=> import('./components/Welcome'))
const Welcome2 = lazy(()=> import('./components/Welcome2'))
export default function App() {
    const [ show, setShow ] = useState(true)
    const handleClick = () => {
        setShow(false)
    }
    return (
        <div>
            <h2>hello lazy</h2>
            <button onClick={handleClick}>点击</button>
            <Suspense fallback={ <div>loading...</div> }>
                { show ? <Welcome /> : <Welcome2 /> }
                </ErrorBoundary>
        </div>
    )
}
```

这里需要配合React.Suspense方法，来完成异步组件加载过程中的loading效果。

## 错误边界

在React中如果组件发生了错误，会导致整个页面清空，如果只想让有问题的组件提示，而不影响到其他组件的话，可以使用错误边界组件进行处理。

这里要注意，目前错误边界组件只能用类组件进行编写。

```jsx
// ./07_ErrorBoundary.jsx
import React, { Component } from 'react'
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children; 
    }
}
```

使用错误边界组件，可以结合上面的异步组件一起。

```jsx
import React, { lazy, Suspense } from 'react'
import { useState } from 'react'
import ErrorBoundary from './07_ErrorBoundary'

const Welcome = lazy(()=> import('./components/Welcome'))
const Welcome2 = lazy(()=> import('./components/Welcome2'))

export default function App() {
    const [ show, setShow ] = useState(true)
    const handleClick = () => {
        setShow(false)
    }
    return (
        <div>
            <h2>hello lazy</h2>
            <button onClick={handleClick}>点击</button>
            <ErrorBoundary>
                <Suspense fallback={ <div>loading...</div> }>
                    { show ? <Welcome /> : <Welcome2 /> }
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
```

当<Welcome>组件发生错误的时候，就只会在局部提示错误信息，并不影响到React的其他组件。

