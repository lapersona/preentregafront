import React from 'react';
//helpers:
import deleteProductInCarrito from '../helpers/deleteProductFromCarrito';

const CarritoProductItem = ({ prod }) => {

  const removeProduct = () => {
    deleteProductInCarrito( prod.id )
  }

  return (
    <>
      <tr>
        <td >
          <div className="img-carrito-container" >
            <img src={ prod.thumbnail } alt="img"></img>
          </div>
        </td>
        <td>{ prod.title }</td>
        <td>{ prod.price }</td>
        <td>{ prod.stock }</td>
        <td onClick={ () => removeProduct() }>
          <span className="material-symbols-outlined">close</span>
        </td>
      </tr>
    </>
  )
}

export default CarritoProductItem;