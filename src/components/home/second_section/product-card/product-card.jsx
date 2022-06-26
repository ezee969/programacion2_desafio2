import './product-card.css';
import React from 'react';
import { toast } from 'react-toastify';

export default function ProductCard({ imgUrl, imgDesc, title, description }) {
  const notify = () => {
    toast.success('Success!!', { position: toast.POSITION.TOP_CENTER });
  };
  return (
    <div className='product-card'>
      <div className='product-card-img-cont'>
        <img className='product-card-img' src={imgUrl} alt={imgDesc} />
      </div>
      <div className='product-card-info'>
        <h3 className='product-card-title'>{title}</h3>
        <p className='product-card-desc'>{description}</p>
        <button onClick={notify} className='product-card-button'>
          Lo quiero
        </button>
      </div>
    </div>
  );
}
