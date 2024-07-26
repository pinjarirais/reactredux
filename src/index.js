import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import store from './states/store';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Incdec from './components/Incdec';
import Home from './components/Home';
import Getapi from './components/Getapi';
import Postapi from './components/Postapi';
import DeleteApi from './components/Deleteapi';
import PutApi from './components/Putapi';
import MemoValue from './components/MemoValue';
import LiftingUp from './components/LiftingUp';
import Hoc from './components/Hoc';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/getapi",
        element: <Getapi />,
      },
      {
        path: "/incdec",
        element: <Incdec />,
      },
      {
        path: "/postapi",
        element: <Postapi />,
      },
      {
        path: "/deleteapi",
        element: <DeleteApi />,
      },
      {
        path: "/putapi",
        element: <PutApi />,
      },
      {
        path: "/memoValue",
        element: <MemoValue />,
      },
      {
        path: "/liftingup",
        element: <LiftingUp />,
      },
      {
        path: "/hoc",
        element: <Hoc />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
