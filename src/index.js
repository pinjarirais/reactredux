import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import store from './states/store';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
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
import UserForm from './components/UserForm';
import UserFormData from './components/UserFormData';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/getapi",
//         element: <Getapi />,
//       },
//       {
//         path: "/incdec",
//         element: <Incdec />,
//       },
//       {
//         path: "/postapi",
//         element: <Postapi />,
//       },
//       {
//         path: "/deleteapi",
//         element: <DeleteApi />,
//       },
//       {
//         path: "/putapi",
//         element: <PutApi />,
//       },
//       {
//         path: "/memoValue",
//         element: <MemoValue />,
//       },
//       {
//         path: "/liftingup",
//         element: <LiftingUp />,
//       },
//       {
//         path: "/hoc",
//         element: <Hoc />,
//       },
//       {
//         path: "/userform",
//         element: <UserForm />,
//       },
//       {
//         path: "/userformdata",
//         element: <UserFormData />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />} >
      <Route path='' element={<Home />}/>
      <Route path='getapi' element={<Getapi />}/>
      <Route path='incdec' element={<Incdec />}/>
      <Route path='postapi' element={<Postapi />}/>
      <Route path='deleteapi' element={<DeleteApi />}/>
      <Route path='putapi' element={<PutApi />}/>
      <Route path='memoValue' element={<MemoValue />}/>
      <Route path='liftingup' element={<LiftingUp />}/>
      <Route path='hoc' element={<Hoc />}/>
      <Route path='userform' element={<UserForm />}/>
      <Route path='userformdata' element={<UserFormData />}/>
    </Route>
  )
);


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
