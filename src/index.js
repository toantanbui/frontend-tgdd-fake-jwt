import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reduxStore, { persistor } from './redux';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={reduxStore}>

    <App persistor={persistor} />

  </Provider>,
  document.getElementById('root')
);





reportWebVitals();
