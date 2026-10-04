import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StoreLocationsPage from './pages/store-locations/StoreLocationsPage.jsx'
import './index.css'

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = normalizedPath === '/id/pages/lokasi-toko' ? StoreLocationsPage : App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
