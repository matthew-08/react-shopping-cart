import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './productdetails.module.css';
import RemoveCart from './Removecart/RemoveCart';

export default function ProductDetails() {
  const [removeCart, setRemoveCart] = useState(false);

  return (
    <main>
      <section
        className={styles.section}
      >
        <div
          className={styles['product-container']}
        >
          <div
            className={styles['img-container']}
          >
            <img src="/public/vite.svg" />
          </div>
          <div>
            <div
              className={styles['info-container']}
            >
              <div
                className={styles['info-container-top']}
              >
                <h2>Product name</h2>
                <p>Sold 120 | 3.9 stars</p>
              </div>
              <h2
                className={styles.price}
              >
                $130

              </h2>
              <div
                className={styles['info-container-bottom']}
                style={{ padding: 0 }}
              >
                <p>Category:</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum praesentium accusamus libero. Magnam ten
                  etur corporis quo minus cum rem ipsam?
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles['buy-container']}
            >
              <h3>Buy Now:</h3>
              <AnimatePresence>
                {removeCart ? (
                  <RemoveCart
                    remove={setRemoveCart}
                  />
                ) : (
                  <motion.button
                    key="button"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    type="button"
                    onClick={() => setRemoveCart(true)}
                  >
                    <img src="/public/cart.svg" alt="cart" />
                    Add to Cart
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </main>

  );
}
