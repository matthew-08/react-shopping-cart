import React, { useRef } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './navbar.module.css';
import cart from './img/cart.svg';

export default function Navbar({ showCart }) {
  const cartBtn = useRef(null);

  return (
    <header>
      <nav>
        <div
          className={styles['nav-options']}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Shop</Link>
          </li>
          <li>
            <Link to="/home">Contact</Link>
          </li>
        </div>
        <div
          className={styles.input}
        >
          <input
            type="text"
            placeholder="Search product..."
            className={styles.searchinput}
          />
        </div>
        <button
          ref={cartBtn}
          type="button"
          onClick={() => showCart(cartBtn)}
          className={styles.cart}
        >
          <div
            className={styles['product-counter']}
          >
            0
          </div>
          <img src={cart} alt="cart-logo" />
        </button>
      </nav>
    </header>
  );
}
