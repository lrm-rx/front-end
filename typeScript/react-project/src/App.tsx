import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="*" element={<div>not Found</div>} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;

