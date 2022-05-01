import './card_reverse.css';
import './responsive.css';
import React from 'react';
import CardText from '../card_text/card_text';
import CardImg from '../card_img/card_img';

const CardReverse = ({ title, description, imgSrc, isDesktop }) => {
  return (
    <div className='card-reversed fadeIn'>
      {!isDesktop && <CardImg src={imgSrc} />}
      <CardText title={title} description={description} />
      {isDesktop && <CardImg src={imgSrc} />}
    </div>
  );
};

export default CardReverse;
