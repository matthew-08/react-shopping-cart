import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cartitem.module.css';

export default function CartItem({
  img, price, quantity, name, id, desc, passRating, count,
}) {
  return (
    <Link
      to={{
        pathname: `/store/${id}`,
      }}
      className={styles['item-container']}
      state={{
        img, name, price, desc, passRating, count,
      }}
    >

      <span
        className={styles['img-wrapper']}
      >
        <img src={img} />
      </span>
      <div
        className={styles.info}
      >
        <div
          className={styles['info-top']}
        >
          <h3
            className={styles['item-name']}
          >
            {name}
          </h3>
          <p
            className={styles.price}
          >
            {`$${price}`}
          </p>

        </div>
        <div
          className={styles['info-bottom']}
        >
          <p
            className={styles.quantity}
          >
            Quantity:
            {' '}
            {quantity}
          </p>
          <p>
            Total:
            {' '}
            $
            {price * quantity}
          </p>
        </div>
      </div>
    </Link>

  );
}
