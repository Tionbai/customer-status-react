import React from 'react';
import ReactDOM from 'react-dom';
import { CustomersProvider } from './contexts/CustomersProvider';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CustomersProvider>
      <App />
    </CustomersProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
