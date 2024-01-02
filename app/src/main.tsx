import React from 'react'
import ReactDOM from 'react-dom/client'
import Top from '@/Top.tsx'
import List from '@/List.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@/assets/index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)