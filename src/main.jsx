import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/HomePage.jsx'
import ProductsPage from './pages/products/ProductsPage.jsx'
import StoreLocationsPage from './pages/store-locations/StoreLocationsPage.jsx'
import './index.css'

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = normalizedPath === '/products'
  ? ProductsPage
  : normalizedPath === '/id/pages/lokasi-toko'
    ? StoreLocationsPage
    : HomePage

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
