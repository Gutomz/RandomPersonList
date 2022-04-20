import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/pageNotFound';
import RandomPersonListPage from './pages/randomPersonList';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandomPersonListPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
