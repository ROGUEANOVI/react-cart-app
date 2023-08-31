import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { CartView } from '../components/CartView';
import { ProductsView } from '../components/ProductsView';

export const CartRoutes = ({ cartItems, handlerAddProductToCart, handlerDeleteProduct }) => {
  return (
    <>
      <Routes>
        <Route path='products' element={<ProductsView handlerAddProductToCart={handlerAddProductToCart} />} />

        <Route
          path='cart'
          element={
            cartItems?.length <= 0 ? (
              <div className='alert alert-warning'>No hay productos en el carrito de compras</div>
            ) : (
              <div className='my-4 w-50'>
                <CartView items={cartItems} handlerDeleteProduct={handlerDeleteProduct} />
              </div>
            )
          }
        />
        <Route path='/' element={<Navigate to={'/products'} />} />
      </Routes>
    </>
  );
};
