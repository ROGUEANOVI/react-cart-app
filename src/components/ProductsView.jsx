import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import { ProductItemView } from './ProductItemView';

export const ProductsView = ({ handlerAddProductToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getProducts();
    setProducts(data);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <div className='alert alert-info'>Cargando...</div>}
      <div className='row'>
        {products.map(product => (
          <div className='col-4 my-2' key={product.id}>
            <ProductItemView product={product} handlerAddProductToCart={handlerAddProductToCart} />
          </div>
        ))}
      </div>
    </>
  );
};
