import React from 'react';
import ProductCard from '../product-card/product-card';

export default function ProductCards({ products }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.title}
          imgUrl={product.imgUrl}
          imgDesc={product.imgDesc}
          title={product.title}
          description={product.description}
        />
      ))}
    </>
  );
}
