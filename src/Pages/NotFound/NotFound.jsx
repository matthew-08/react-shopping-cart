import React from 'react';
import styles from './notfound.module.css';

export default function NotFound() {
  const ok = window.location;
  return (
    <section>
      <h1>Hello</h1>
      <div
        className={styles['error-cont']}
      >
        <h1>404</h1>
      </div>
    </section>
  );
}
