import React from 'react';
import { motion } from 'framer-motion';
import styles from './removecart.module.css';
import Counter from '../../../Components/Counter/Counter';

export default function RemoveCart({
  remove, removeFromCart, id, incrementQuantity,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles['remove-cart']}
    >
      <Counter
        incrementQuantity={incrementQuantity}
        id={id}
      />
      <button
        type="button"
        onClick={() => {
          remove(false);
          removeFromCart(id);
        }}
      >
        {' '}
        <img src="/public/cart.svg" />
        {' '}
        Remove
      </button>
    </motion.div>

  );
}
