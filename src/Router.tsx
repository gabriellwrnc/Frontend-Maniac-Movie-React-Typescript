import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './Pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/details' element={<h1>Ini Details Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
