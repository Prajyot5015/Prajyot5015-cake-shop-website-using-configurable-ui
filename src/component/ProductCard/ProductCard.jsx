import React from 'react'
import './ProductCard.css'
import { theme } from '../../data'

function ProductCard({name, img}) {
  return (
    <div className='product-card' style={{background: theme.cardBg}}>
        <img src={img} alt={name} className='product-img'/>
        <h1 className='product-name' style={{color: theme.heading}}>{name}</h1>
    </div>
  )
}

export default ProductCard