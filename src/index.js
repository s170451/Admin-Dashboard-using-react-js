import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Demo from './render';
import { ContextProvider } from './context/ContextProvider';


  ReactDOM.render(
    <React.StrictMode>
      <ContextProvider>
        <Demo />
      </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );  



