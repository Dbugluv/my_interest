import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import { BrowserRouter } from "react-router-dom";
import ChildrenRoute from './route'
import NavigatorHead from './components/navigatorHead'

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <NavigatorHead />
    <ChildrenRoute />
  </BrowserRouter>
);

reportWebVitals();
