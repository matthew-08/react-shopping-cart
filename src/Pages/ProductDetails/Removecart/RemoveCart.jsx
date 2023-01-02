import React from 'react';
import { motion } from 'framer-motion';
import styles from './removecart.module.css';

export default function RemoveCart({ remove }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div
        className={styles.counter}
      >
        <button>-</button>
        <input type="number" />
        <button>+</button>
      </div>
      <button
        type="button"
        onClick={() => remove(false)}
      >
        {' '}
        <img src="/public/cart.svg" />
        {' '}
        Remove
      </button>
    </motion.div>

  );
}
