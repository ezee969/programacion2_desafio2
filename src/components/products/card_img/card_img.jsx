import React from 'react';
import './card_img.css';
import './responsive.css';
export default function CardImg({ src }) {
  return (
    <div className='img-cont'>
      <img className='prod-img' src={src} alt='kwai-cat' />
    </div>
  );
}
