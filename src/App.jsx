import { useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes, useLocation,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  const [cart, showCart] = useState(false);
  const [cartBtn, setCartBtn] = useState('');

  const handleCart = (e) => {
    setCartBtn(e);
    showCart(true);
  };

  return (
    <Router>
      <Navbar
        showCart={handleCart}
      />
      <AnimatedRoutes />
      {cart && (
      <Cart
        closeCart={showCart}
        cartBtn={cartBtn}
      />
      )}
    </Router>
  );
}

export default App;
