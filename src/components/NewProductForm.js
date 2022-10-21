import React from 'react';
import postProducts from '../helpers/postProduct';

const NewProductForm = ({ setProducts, toggleNewProducInfo }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const titleForm = document.querySelector('#title');
    const priceForm = document.querySelector('#price');
    const descForm = document.querySelector('#desc');
    const thumbnailForm = document.querySelector('#thumbnail');
    const stockForm = document.querySelector('#stock');


    const newProduct = {
      title: titleForm.value,
      price: priceForm.value,
      desc: descForm.value,
      thumbnail: thumbnailForm.value,
      stock: stockForm.value,
    }

    postProducts( newProduct )


    titleForm.value = '';
    priceForm.value = '';
    descForm.value = '';
    thumbnailForm.value = '';
    stockForm.value = '';

    toggleNewProducInfo();
  }


  return (
    <div id="newProdForm" className="newProdForm">
        <form onSubmit={ handleSubmit } >
          <div className="newProdContainer" >
            <h4>Agregar Nuevo Producto</h4>
          </div>
          <label htmlFor="title" >Nombre</label>
          <input name="title" id="title" type="text" autoComplete="off" required></input>
          <label htmlFor="price" >Precio</label>
          <input name="price" id="price" type="number" autoComplete="off" required></input>
          <label htmlFor="desc" >Descripción</label>
          <input name="desc" id="desc" type="text" autoComplete="off" required></input>
          <label htmlFor="thumbnail" >imagen URL</label>
          <input name="thumbnail" id="thumbnail" type="text" autoComplete="off" required></input>
          <label htmlFor="stock" >Stock</label>
          <input name="stock" id="stock" type="number" autoComplete="off" required></input>
          <button type="submit">
            <span className="material-symbols-outlined">save</span>
          </button>
        </form>
        <div className="close-container" onClick={ () => toggleNewProducInfo() } >
          <span className="material-symbols-outlined">close</span>
        </div>
    </div>
  )
}

export default NewProductForm;