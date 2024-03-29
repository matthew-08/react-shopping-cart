import React, { useEffect, useState } from 'react';
import styles from './products.module.css';
import ShopProduct from './ShopProduct/ShopProduct';

export default function Products({ products, addToCart }) {
  return (
    <section
      className={styles['products-main']}
    >
      {products.map((item) => (
        <ShopProduct
          id={item.id}
          key={item.id}
          img={item.image}
          name={item.title}
          price={item.price}
          rating={item.rating}
          desc={item.description}
          addToCart={addToCart}
        />
      ))}
    </section>
  );
}
