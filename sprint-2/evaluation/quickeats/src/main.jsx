import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './components/AuthContextProvider.jsx';
import {DashboardContextProvider } from './components/DashboardContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <DashboardContextProvider>
        <App />
      </DashboardContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
