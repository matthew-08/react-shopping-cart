import React from 'react';
import styles from './Carousel.module.css';

export default function CategoryLink({ name }) {
  return (
    <div
      className={styles.link}
    >
      <span>{name}</span>
    </div>
  );
}
