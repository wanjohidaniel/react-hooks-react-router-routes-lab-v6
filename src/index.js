import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import routes from './routes';

const BrowserRouter = createBrowserRouter(); // Create the browser router

// Render the application with router provider
ReactDOM.render(
  <BrowserRouter>
    <RouterProvider routes={routes}>
      <App />
    </RouterProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
