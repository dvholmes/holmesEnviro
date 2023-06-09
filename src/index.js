import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Templates/Home';
import ProductsPage from './Templates/products';
import ImageGallery from './Templates/gallery.mjs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// routes to different pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
   
  },
  {
    path: "/products",
    element: <ProductsPage/>,
  },
  {
    path: "/gallery",
    element: <ImageGallery/>,
  }
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
