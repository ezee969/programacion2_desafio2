import React from 'react';
import './card_text.css';
import './responsive.css';

const CardText = ({ title, description }) => {
  return (
    <div>
      <h2 className='h2-cardtext'>{title}</h2>
      <p className='p-cardtext'>{description}</p>
    </div>
  );
};

export default CardText;
