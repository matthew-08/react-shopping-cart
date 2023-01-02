import React from 'react';
import { motion } from 'framer-motion';
import styles from './homepage.module.css';
import Carousel from './Components/Carousel/Carousel';

export default function Homepage() {
  return (
    <main
      className={styles.main}
    >
      <Carousel />
      <motion.div
        className={styles.text}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet   consectetur adipisicing elit.
          Nemo vitae quos, facere doloremque repellendus porro?
        </p>
        <button
          className={styles['shop-button']}
        >
          Shop Now!

        </button>
      </motion.div>
    </main>
  );
}
