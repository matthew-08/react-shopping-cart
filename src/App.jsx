import { useState } from 'react';
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
  const [products, setProducts] = useState([]);

  const handleCart = (e) => {
    setCartBtn(e);
    showCart(true);
  };

  return (
    <Router>
      <Navbar
        showCart={handleCart}
      />
      <AnimatedRoutes
        cart={cart}
        updateCart={updateCart}
        setProducts={setProducts}
      />
      {cartAside && (
      <Cart
        cartItems={cart}
        closeCart={showCart}
        cartBtn={cartBtn}
      />
      )}
    </Router>
  );
}

export default App;
