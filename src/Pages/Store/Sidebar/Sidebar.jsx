import React from 'react';
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div
      className={styles.sidebar}
    >
      <div
        className={styles['sidebar-nav']}
      >
        <div
          className={styles['sidebar-nav-top']}
        >
          <h3>Store /</h3>
          <h2>All</h2>
        </div>
        <div
          className={styles['sidebar-links-container']}
        >
          <ul>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelry</li>
            <li>{'Men\'s clothing'}</li>
            <li>{'Womens\'s clothing'}</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
