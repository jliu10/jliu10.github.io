import React, { useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.body.style = "background: #7851a9";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
