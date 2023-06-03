import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// const root = ReactDOM.createRoot(document.getElementById('root'));

import CommentList from './chapter_05/CommentList';

ReactDOM.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
