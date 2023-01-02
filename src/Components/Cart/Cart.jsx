import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './cart.module.css';

export default function Cart({ closeCart, cartBtn }) {
  const cart = useRef(null);

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
      />
    </section>
  );
}
