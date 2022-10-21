import React, { useEffect, useState } from 'react';
import CarritoProductItem from './CarritoProductItem';
import getProductsInCarrito from '../helpers/getProductsInCarrito';

const Carrito = () => {

  const [prods, setProds] = useState([{}])

  useEffect(() => {
    getProductsInCarrito().then(data => setProds(data));
  }, [prods]);

  const carritoToggle = () => {
    const toggle = document.querySelector( '#carrito-toggle' );
    const cover = document.querySelector( '#cover' );
    toggle.classList.toggle( 'carrito-toggle-show' );
    cover.classList.toggle( 'cover-visible' );
  }


  return (
    <div className="carrito-toggle" id="carrito-toggle" >
      <div className="carrito-toggle-title">
        Carrito
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Img</th>
            <th scope="col">Titulo</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            (prods === [{}])
              ? (<div>Loading...</div>)
              : (
                prods.map(prod => {
                return (
                  <CarritoProductItem prod={prod} key={prod.id + Math.random} />
                )
              }))
          }
        </tbody>
      </table>
      <div className="close-container" onClick={ () => carritoToggle() } >
        <span className="material-symbols-outlined">close</span>
      </div>
    </div>
  )
}

export default Carrito;