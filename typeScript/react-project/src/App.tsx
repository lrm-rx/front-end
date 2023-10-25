import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={null} /> */}
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;

