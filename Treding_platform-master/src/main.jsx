// import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from './store';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>

//     {/* /**this for redux stire available for hole  application  */ }
//      <Provider store={store}>
//             <App />
//      </Provider>
       
//     </BrowserRouter>  
     
//   </StrictMode>,
// )


import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './State/Store.js'; // ✅ Correct import (lowercase 's')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* This makes the Redux store available throughout the application */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

