import './card.css';
import './responsive.css';
import React from 'react';
import CardText from '../card_text/card_text';
import CardImg from '../card_img/card_img';

const Card = ({ title, description, imgSrc, shorter }) => {
  return (
    <div className={`card fadeIn ${shorter ? 'shorter' : '  '}`}>
      <CardImg src={imgSrc} />
      <CardText title={title} description={description} />
    </div>
  );
};

export default Card;
