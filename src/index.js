import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App';
import Product from './components/product/product';
import Single from './components/singleproduct/single';
const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  
},{
  path: '/categories',
  element: <Product/>,
},{
  path: '/products/:id',
  element:<Single/>
}])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

