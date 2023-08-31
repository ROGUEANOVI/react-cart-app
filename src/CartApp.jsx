import React from 'react';
import { useItemCart } from './hooks/useItemCart';
import { Navbar } from './components/Navbar';
import { CartRoutes } from './routes/CartRoutes';

const CartApp = () => {
  const { cartItems, handlerAddProductToCart, handlerDeleteProduct } = useItemCart();
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Cart App</h1>
        <CartRoutes
          cartItems={cartItems}
          handlerAddProductToCart={handlerAddProductToCart}
          handlerDeleteProduct={handlerDeleteProduct}
        />
      </div>
    </>
  );
};

export default CartApp;
