import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductItemView = ({ product, handlerAddProductToCart }) => {
  const navegate = useNavigate();

  const { id, name, description, price } = product;

  const onAddProductToCart = newProduct => {
    handlerAddProductToCart(newProduct);
    navegate('/cart');
  };

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>{price}</p>
          <button className='btn btn-primary' onClick={() => onAddProductToCart({ id, name, description, price })}>
            Agregar Al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
