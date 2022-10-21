import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import EditProductForm from './EditProductForm';

const ProductsGrid = ({ products }) => {

  const [editProd, setEditProd] = useState({
    title: '',
    price: '',
    desc: '',
    thumbnail: '',
    stock: '',
    }
  );

  useEffect(() => {
  }, [editProd])

  return (
    <>
      <div className="products-grid" >
        {
          ( products === [] )
            ? ( <div>Loading...</div> )
            : (
                products.map(product => {
                  return(
                    <ProductItem product={ product } key={ product.id } setEditProd={ setEditProd }/>
                  )
                })
            )
        }
      </div>
      <EditProductForm editProd={ editProd }/>
    </>
  )
}

export default ProductsGrid;