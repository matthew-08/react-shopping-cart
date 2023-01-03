import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './cart.module.css';
import CartItem from './CartItem/CartItem';

export default function Cart({ closeCart, cartBtn, cartItems }) {
  const [cartInfo, setCartInfo] = useState({
    quantity: 0,
  });

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

  useEffect(() => {
    const calculateTotal = cartItems.reduce((prev, item) => prev + item.price * item.quantity, 0);
    const calculateQuantity = cartItems.reduce((prev, item) => prev + item.quantity, 0);
    console.log(calculateTotal);
    setCartInfo(
      {
        ...cartInfo,
        quantity: calculateQuantity,
        total: calculateTotal,
      },
    );
  }, [cartItems]);

  useEffect(() => {
    console.log(cartInfo);
  }, [cartInfo]);

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
          >
            Clear

          </button>
        </div>
        {cartItems.map((item) => (
          <CartItem
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </motion.div>
    </section>
  );
}
