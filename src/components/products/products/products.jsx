import React from 'react';
import Card from '../card/card';
import CardReverse from '../card_reverse/card_reverse';
import catBoxImg from '../../../utils/imgs/ben1.png';
import whiteCatImg from '../../../utils/imgs/ben2.png';
import blackCatImg from '../../../utils/imgs/ben3.png';
import { motion } from 'framer-motion';

export default function Products({ isDesktop }) {
  const genericTxt =
    'Miles de productos hay en el mercado, pero nada como una caja con gatitos. Miles de productos hay en el mercado, pero nada como una caja con gatitos';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-col w-full gap-4 py-4 xl:py-14'
    >
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
    </motion.div>
  );
}
