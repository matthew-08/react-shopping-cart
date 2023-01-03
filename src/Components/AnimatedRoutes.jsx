import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from '../Pages/Homepage/Homepage';
import Store from '../Pages/Store/Store';
import NotFound from '../Pages/NotFound/NotFound';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';

export default function AnimatedRoutes({ cart, updateCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);
  const addToCart = (id) => {
    if (cart.filter((item) => item.id === id).length > 0) {
      updateCart(cart.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
        return item;
      }));
    } else {
      const item = products.find((i) => i.id === id);
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
    console.log(cart);
  };
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store">
          <Route
            index
            element={(
              <Store
                cart={cart}
                addToCart={addToCart}
                products={products}
              />
)}
          />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
