import './second_section.css';
import ProductCards from './product_cards/product_cards';
import firstProdImg from '../../../utils/imgs/box1.png';
import secondProdImg from '../../../utils/imgs/box2.png';

import React from 'react';

export default function SecondSection() {
  const text =
    'Miles de productos hay en el mercado, pero nada como una caja con gatitos';
  const products = [
    {
      title: 'Product 1',
      description: text,
      imgUrl: firstProdImg,
      imgDesc: '',
    },
    {
      title: 'Product 2',
      description: text,
      imgUrl: secondProdImg,
      imgDesc: '',
    },
  ];

  return (
    <div id='second-section-cont'>
      <ProductCards products={products} />
    </div>
  );
}
