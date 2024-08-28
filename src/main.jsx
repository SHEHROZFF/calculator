// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CustomCalculator from './CustomCalculator';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calculator" element={<CustomCalculator />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
