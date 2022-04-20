import { render as rtlRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import createStore from '../redux';

function render(
  ui,
  {
    preloadedState,
    store = createStore(),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter history={createMemoryHistory()}>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

function createRoute(element, params = { path: "/" }) {
  return (<Route path={params.path} element={element}/>);
}

function createRoutes(routes = []) {
  return (<Routes>{routes}</Routes>);
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, createRoutes, createRoute };

