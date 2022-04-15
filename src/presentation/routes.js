import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/pageNotFound';
import PersonDetailsPage from './pages/personDetails';
import RandomPersonListPage from './pages/randomPersonList';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandomPersonListPage />} />
        <Route path="details" element={<PersonDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
