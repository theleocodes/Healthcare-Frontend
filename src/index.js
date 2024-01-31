import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import Slot from './Components/Slot';
import Product from './Components/Product';

const router = createBrowserRouter(
  [
    {path: "/",
    element: <Home />},
    {path : "/slot",
  element : <Slot></Slot>},
  {path: "/product",
element: <Product> </Product>},
{path : "/login",
element: <Login></Login>}
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>
);


