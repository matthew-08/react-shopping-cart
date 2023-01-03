import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styles from './productdetails.module.css';
import RemoveCart from './Removecart/RemoveCart';

export default function ProductDetails({ addToCart, removeFromCart, incrementQuantity }) {
  const [removeCart, setRemoveCart] = useState(false);
  const location = useLocation();
  console.log(location);
  const {
    name, img, desc, price, passRating, count, id,
  } = location.state;
  console.log(name);

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
            <img src={img} alt="product-img" />
          </div>

          <div
            className={styles['info-container']}
          >
            <div
              className={styles['info-container-top']}
            >
              <h2>{name}</h2>
              <p>
                Sold
                {' '}
                {count}
                {' '}
                |
                {' '}
                {passRating}
                {' '}
                stars
              </p>
            </div>
            <h2
              className={styles.price}
            >
              {`$${price}`}

            </h2>
            <div
              className={styles['info-container-bottom']}
              style={{ padding: 0 }}
            >
              <p>Category:</p>
              <p>
                {desc}
              </p>
            </div>
          </div>
          <div
            className={styles.border}
          >
            <div
              className={styles['buy-container']}
            >
              <h3>Buy Now:</h3>
              <AnimatePresence>
                {removeCart ? (
                  <RemoveCart
                    remove={setRemoveCart}
                    removeFromCart={removeFromCart}
                    id={id}
                    incrementQuantity={incrementQuantity}

                  />
                ) : (
                  <motion.button
                    key="button"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    type="button"
                    onClick={() => {
                      setRemoveCart(true);
                      addToCart(id);
                    }}
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
