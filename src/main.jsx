import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

// import * as bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import CreateBlogProvider, { CreateBlogContext } from './context/CreateBlogContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CreateBlogProvider>
          <App />
        </CreateBlogProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
