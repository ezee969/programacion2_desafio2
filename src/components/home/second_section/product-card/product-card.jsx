import './product-card.css';
import React from 'react';

export default function ProductCard({ imgUrl, imgDesc, title, description }) {
  return (
    <div className='product-card'>
      <div className='product-card-img-cont'>
        <img className='product-card-img' src={imgUrl} alt={imgDesc} />
      </div>
      <div className='product-card-info'>
        <h3 className='product-card-title'>{title}</h3>
        <p className='product-card-desc'>{description}</p>
        <button className='product-card-button'>Lo quiero</button>
      </div>
    </div>
  );
}
