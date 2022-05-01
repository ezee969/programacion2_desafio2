import './products.css';
import './responsive.css';
import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import CardReverse from '../card_reverse/card_reverse';
import catBoxImg from '../../../utils/imgs/ben1.png';
import whiteCatImg from '../../../utils/imgs/ben2.png';
import blackCatImg from '../../../utils/imgs/ben3.png';

export default function Products({ isDesktop }) {
  const genericTxt =
    'Miles de productos hay en el mercado, pero nada como una caja con gatitos. Miles de productos hay en el mercado, pero nada como una caja con gatitos';

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <main id={visible ? 'products-container-show' : 'products-container-hide'}>
      <Card title='Producto1' description={genericTxt} imgSrc={catBoxImg} />
      <CardReverse
        title='Producto1'
        description={genericTxt}
        imgSrc={whiteCatImg}
        isDesktop={isDesktop}
      />
      <Card
        title='Producto1'
        description={genericTxt}
        imgSrc={blackCatImg}
        shorter={true}
      />
    </main>
  );
}
