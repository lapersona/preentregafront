import React, { useEffect, useState } from 'react';
//components
import Navbar from './components/Navbar';
import ProductsGrid from './components/ProductsGrid';
//helpers
import getProducts from './helpers/getProducts';

const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then( data => setProducts( data ) )
  }, [ products ]);

  return (
    <>
      <Navbar />
      <main>
        <ProductsGrid products={ products } setProducts={ setProducts } />
      </main>
    </>
  )
}

export default App;