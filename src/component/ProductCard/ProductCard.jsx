import React from 'react'
import './ProductCard.css'
import { theme } from '../../data'

function ProductCard({name, img}) {
  return (
    <div className='product-card' style={{background: theme.cardBg}}>
        <h1>{name}</h1>
    </div>
  )
}

export default ProductCard