import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateTotal } from '../services/productService';

export const CartView = ({ items, handlerDeleteProduct }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const onDeleteProduct = id => {
    handlerDeleteProduct(id);
  };

  const navegate = useNavigate();

  const onNavegate = () => {
    navegate('/products');
  };

  return (
    <>
      <h3>Carro de compras</h3>
      <table className='table table-hover table-striped'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.product.price}</td>
              <td>
                <button className='btn btn-danger' onClick={() => onDeleteProduct(item.product.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3' className='text-end fw-bold'>
              TOTAL:
            </td>
            <td colSpan='3' className='text-start fw-bold bg-success'>
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className='btn btn-secondary' onClick={onNavegate}>
        Regresar
      </button>
    </>
  );
};
