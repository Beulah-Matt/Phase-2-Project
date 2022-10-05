import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './Styling/globalStyles';
import Fonts from './Styling/Fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <GlobalStyles />
    <Fonts />
    <App />
  </div>
);



