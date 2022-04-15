import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import createStore from './presentation/redux';
import AppRoutes from './presentation/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore()}>
    <AppRoutes />
  </Provider>
);
