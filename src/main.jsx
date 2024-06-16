import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Product, {loader as productloader} from "./routes/product";
import Products, {loader as productsloader} from "./routes/products";

import './index.css'
import Root from './routes/root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products/:productId",
        element: <Product />,
        loader: productloader,
      },
      {
      path: "/products",
      element: <Products />,
      loader: productsloader,
      }
    ],
  },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
