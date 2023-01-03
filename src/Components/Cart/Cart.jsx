import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './cart.module.css';
import CartItem from './CartItem/CartItem';

export default function Cart({
  closeCart, cartBtn, cartItems, cartInfo,
}) {
  const cart = useRef(null);
  console.log(cartItems);

  const checkClick = (e) => {
    const element = e.target;
    if (cartBtn.current.contains(element)) {
      return;
    }
    if (cart.current && !cart.current.contains(element)) {
      closeCart(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', checkClick);
    return () => document.body.removeEventListener('click', checkClick);
  }, []);

  return (
    <section
      className={styles.overlay}
    >
      <motion.div
        initial={{ x: '70%' }}
        animate={{ x: '0' }}
        transition={{ duration: 1 }}
        ref={cart}
        className={styles['cart-sidebar']}
      >
        <div
          className={styles.header}
        >
          <h2>
            {cartInfo.quantity === 0 ? 'No products added' : `${cartInfo.quantity} Products:`}
          </h2>
          <button
            type="button"
            className={styles['clear-button']}
          >
            Clear

          </button>
        </div>
        <div
          className={styles['cart-container']}
        >
          <div
            className={styles['items-overflow']}
          >

            {cartItems.map((item) => (
              <CartItem
                img={item.image}
                price={item.price}
                quantity={item.quantity}
                name={item.title}
                id={item.id}
                desc={item.description}
                passRating={item.rating.rate}
                count={item.rating.count}
              />
            ))}
          </div>
          <div
            className={styles['cart-container-bottom']}
          >
            <h3>
              Total:
              {' '}
              {cartInfo.total ? `$${cartInfo.total}` : '$0'}
              {' '}
            </h3>
            <button
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
