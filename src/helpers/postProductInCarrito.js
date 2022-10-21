const axios = require( 'axios' );
const baseURL = 'https://pre-entrega.herokuapp.com';

const postProductInCarrito = async( newProduct ) => {

  const apiUrl = `${ baseURL }/api/carrito/1/productos`;

  axios.post( apiUrl, newProduct )
    .then( res => console.log( res ) )
    .catch( err => console.log( err.response.data ) );

}

export default postProductInCarrito;