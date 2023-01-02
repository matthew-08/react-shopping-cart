import React, { useState, useEffect } from 'react';
import styles from './store.module.css';
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';

export default function Store({ products }) {
  return (
    <main>
      <Sidebar />
      <Products
        products={products}
      />
    </main>
  );
}
