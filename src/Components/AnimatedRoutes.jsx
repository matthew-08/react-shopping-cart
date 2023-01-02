import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from '../Pages/Homepage/Homepage';
import Store from '../Pages/Store/Store';
import NotFound from '../Pages/NotFound/NotFound';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';

export default function AnimatedRoutes() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);
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
