import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { userContext } from './context/userContext';
import { userSignUp } from './context/userContext';
import { itemsArray, itemsContext } from './context/itemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <userContext.Provider value={userSignUp}>
      <itemsContext.Provider value={itemsArray}>
    <App />
      </itemsContext.Provider>
    </userContext.Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
