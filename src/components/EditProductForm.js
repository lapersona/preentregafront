import React from 'react';
//helpers
import putProducts from '../helpers/putProduct';

const EditProductForm = ({ editProd }) => {

  const titleForm = document.querySelector('#title-edit');
  const priceForm = document.querySelector('#price-edit');
  const descForm = document.querySelector('#desc-edit');
  const thumbnailForm = document.querySelector('#thumbnail-edit');
  const stockForm = document.querySelector('#stock-edit');

  const handleSubmit = (e) => {
    e.preventDefault();

    const editProduct = {
      title: titleForm.value,
      price: priceForm.value,
      desc: descForm.value,
      thumbnail: thumbnailForm.value,
      stock: stockForm.value,
    }

    putProducts( editProd.id, editProduct );
    handleEditProduct();
  }

  const handleEditProduct = () => {
    const editProdPopup = document.querySelector('#editProdForm');
    editProdPopup.classList.toggle('editProdForm-show');
    const cover = document.querySelector( '#cover' );
    cover.classList.toggle( 'cover-visible' );
  }

  const handleCloseEditProduct = () => {
    const editProdPopup = document.querySelector('#editProdForm');
    editProdPopup.classList.toggle('editProdForm-show');
    const cover = document.querySelector( '#cover' );
    cover.classList.toggle( 'cover-visible' );
    titleForm.value = '';
    priceForm.value = '';
    descForm.value = '';
    thumbnailForm.value = '';
    stockForm.value = '';
  }

  return (
    <div id="editProdForm" className="editProdForm">
        <form onSubmit={ handleSubmit } >
          <div className="newProdContainer" >
            <h4>Editar el producto con ID: { editProd.id }</h4>
          </div>
          <label htmlFor="title" >Nombre</label>
          <p>Valor anterior: { editProd.title }</p>
          <input name="title" id="title-edit" type="text" autoComplete="off" required></input>
          <label htmlFor="price" >Precio</label>
          <p>Valor anterior: { editProd.price }</p>
          <input name="price" id="price-edit" type="number" autoComplete="off" required></input>
          <label htmlFor="desc" >Descripción</label>
          <p>Valor anterior: { editProd.desc }</p>
          <input name="desc" id="desc-edit" type="text"  autoComplete="off" required></input>
          <label htmlFor="thumbnail" >imagen URL</label>
          <p>Valor anterior: { editProd.thumbnail }</p>
          <input name="thumbnail" id="thumbnail-edit" type="text" autoComplete="off" required></input>
          <label htmlFor="stock" >Stock</label>
          <p>Valor anterior: { editProd.stock }</p>
          <input name="stock" id="stock-edit" type="number" autoComplete="off" required></input>
          <button type="submit" >
            <span className="material-symbols-outlined">save</span>
          </button>
        </form>
        <div className="close-container" onClick={ handleCloseEditProduct } >
          <span className="material-symbols-outlined">close</span>
        </div>
    </div>
  )
}

export default EditProductForm