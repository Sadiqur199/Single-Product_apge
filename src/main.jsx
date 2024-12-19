import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductCard from './Component/ProductCard/ProductCard.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductCard />
  </StrictMode>,
)
