import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from '../Pages/Homepage/Homepage';
import Store from '../Pages/Store/Store';
import NotFound from '../Pages/NotFound/NotFound';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';

export default function AnimatedRoutes({
  cart, addToCart, products, removeFromCart, incrementQuantity,
}) {
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
          <Route
            path=":id"
            element={(
              <ProductDetails
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                incrementQuantity={incrementQuantity}

              />
)}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
