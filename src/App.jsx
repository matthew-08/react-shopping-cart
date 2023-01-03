import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Routes, useLocation,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  const [cartAside, showCart] = useState(false);
  const [cartBtn, setCartBtn] = useState('');
  const [cart, updateCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);
  const handleCart = (e) => {
    setCartBtn(e);
    showCart(true);
  };
  useEffect(() => {
    const calculateTotal = cartItems.reduce((prev, item) => prev + item.price * item.quantity, 0);
    const roundedTotal = Math.floor((calculateTotal * 100) / 100);
    const calculateQuantity = cartItems.reduce((prev, item) => prev + item.quantity, 0);
    updateCart(
      {
        ...cart,
        quantity: calculateQuantity,
        total: roundedTotal,
      },
    );
  }, [cartItems]);

  const addToCart = (id) => {
    if (cartItems.filter((item) => item.id === id).length > 0) {
      setCartItems(cartItems.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
        return item;
      }));
    } else {
      const item = products.find((i) => i.id === id);
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    console.log(cartItems);
    console.log(cart);
  }, [cartItems]);

  const removeFromCart = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id),
    );
  };

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    }));
  };

  return (
    <Router>
      <Navbar
        showCart={handleCart}
        counter={cart.quantity}
      />
      <AnimatedRoutes
        cartInfo={cart}
        addToCart={addToCart}
        setProducts={setProducts}
        products={products}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
      />
      {cartAside && (
      <Cart
        cartItems={cartItems}
        closeCart={showCart}
        cartInfo={cart}
        cartBtn={cartBtn}
      />
      )}
    </Router>
  );
}

export default App;
