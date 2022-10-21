import React from 'react';
//components:
import NewProductForm from './NewProductForm';
import Carrito from './Carrito';

const Navbar = ( setProducts ) => {

  const toggleNewProducInfo = () => {
    const newProdForm = document.querySelector( '#newProdForm' );
    const cover = document.querySelector( '#cover' );
    newProdForm.classList.toggle( 'newProdForm-show' );
    cover.classList.toggle( 'cover-visible' );
  }

  const carritoToggle = () => {
    const toggle = document.querySelector( '#carrito-toggle' );
    const cover = document.querySelector( '#cover' );
    toggle.classList.toggle( 'carrito-toggle-show' );
    cover.classList.toggle( 'cover-visible' );
  }

  return (
    <>
      <nav>
        <div className="nav-content" >
          <div className="left-nav" >
            <h1>Apple commerce</h1>
          </div>
          <div className="right-nav" >
            <div className="new-product-container" onClick={ () => toggleNewProducInfo() } >
              <span className="material-symbols-outlined">add</span>
              <p>Agregar Producto</p>
            </div>
            <div className="chart-container" onClick={ () => carritoToggle() }>
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
          </div>
        </div>
        <NewProductForm setProducts={ setProducts } toggleNewProducInfo={ toggleNewProducInfo } />
        <Carrito />
        <div className="cover" id="cover" ></div>
      </nav>
    </>
  )
}

export default Navbar;