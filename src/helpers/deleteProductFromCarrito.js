const axios = require( 'axios' );
const baseURL = 'https://pre-entrega.herokuapp.com';

const deleteProductInCarrito = async( prodId ) => {
  const apiUrl = `${ baseURL }/api/carrito/1/productos/${ prodId }`;

  axios.delete( apiUrl )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );

}

export default deleteProductInCarrito;