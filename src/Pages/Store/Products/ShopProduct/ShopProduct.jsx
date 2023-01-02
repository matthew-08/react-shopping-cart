import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styles from './shopproduct.module.css';
import ProductDetails from '../../../ProductDetails/ProductDetails';

export default function ShopProduct({ id, img, name }) {
  console.log(id);
  return (
    <Link
      to={`/store/${id}`}
      className={styles.card}
    >
      <img src={img} alt="product img" />
      <div
        className={styles.description}
      >
        <p
          className={styles.name}
        >
          {name}

        </p>
        <div
          className={styles.bottom}
        >
          <div
            className={styles.left}
          >
            <h4>$800</h4>
            <span>3.9 | Sold 120</span>
          </div>
          <button>
            <img src="/public/cart.svg" />
            Add
          </button>
        </div>
      </div>
    </Link>

  );
}
