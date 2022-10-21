import React from 'react';
//helpers
import deleteProduct from '../helpers/deleteProduct';
import postProductInCarrito from '../helpers/postProductInCarrito';

const ProductItem = ({ product, setEditProd }) => {

  const prodId = 'prod' + product.id;

  const handleDeleteProduct = () => {
    deleteProduct( product.id )
  }

  const handleEditProduct = () => {
    setEditProd( product )
    const editProdPopup = document.querySelector('#editProdForm');
    editProdPopup.classList.toggle('editProdForm-show');
    const cover = document.querySelector( '#cover' );
    cover.classList.toggle( 'cover-visible' );
  }

  const addToCart = () => {

    postProductInCarrito( product );
    alert( 'Producto agregado!' )
  }


  return (
    <div className="product-item" id={ prodId }>
      <div className="img-container" >
        <img src={ product.thumbnail } alt="img" ></img>
      </div>
      <div className="info-container" >
        <div className="left-info" >
          <h4>{ product.title }</h4>
          <p>$ { product.price }</p>
        </div>
        <div className="right-info" onClick={ addToCart }>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>
        <div className="deleteProdContainer" onClick={ () => handleDeleteProduct() }>
          <span className="material-symbols-outlined">delete</span>
        </div>
        <div className="editProdContainer" onClick={ () => handleEditProduct() } >
          <span className="material-symbols-outlined">edit</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;