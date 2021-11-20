import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Detail from './Detail';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />  
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

