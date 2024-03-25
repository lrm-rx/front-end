import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Outlet />
      <div className="navbar">
        <NavLink to="/index">首页</NavLink>
        <NavLink to="/user">我的</NavLink>
      </div>
    </div>
  );
}

export default App;
