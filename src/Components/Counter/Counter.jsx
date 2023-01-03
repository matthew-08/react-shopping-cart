import React from 'react';
import styles from './counter.module.css';

export default function Counter({ incrementQuantity, id }) {
  return (
    <div
      className={styles.counter}
    >
      <button
        type="button"
      >
        -

      </button>
      <input type="number" />
      <button
        type="button"
        onClick={() => incrementQuantity(id)}
      >
        +

      </button>
    </div>
  );
}
