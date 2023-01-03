import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styles from './shopproduct.module.css';
import ProductDetails from '../../../ProductDetails/ProductDetails';

export default function ShopProduct({
  id, img, name, price, rating, desc, addToCart,
}) {
  const passRating = rating.rate;
  const { count } = rating;
  return (
    <Link
      to={{
        pathname: `/store/${id}`,
        state: { img, name },
      }}
      className={styles.card}
      state={{
        img, name, price, desc, passRating, count, id,
      }}
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
            <h4>{`$${price}`}</h4>
            <span
              className={styles.rating}
            >
              {rating.rate}
              {' '}
              |
              {' '}
              {rating.count}
            </span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(id);
            }}
          >
            <img src="/public/cart.svg" />
            Add
          </button>
        </div>
      </div>
    </Link>

  );
}
