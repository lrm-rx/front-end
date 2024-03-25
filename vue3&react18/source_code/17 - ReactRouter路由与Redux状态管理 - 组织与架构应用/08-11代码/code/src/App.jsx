import React from "react";
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2>hello react</h2>
      <Link to="/">首页</Link> | <Link to="/about">关于</Link>
      <Outlet />
    </div>
  );
}

export default App;
