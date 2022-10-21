const axios = require( 'axios' );
const baseURL = 'https://pre-entrega.herokuapp.com';

const postProducts = ( newProduct ) => {

  const apiUrl = `${ baseURL }/api/productos/`;
  let config = {
    headers: {
      admin: true
    }
  }

  axios.post( apiUrl, newProduct, config )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );
}

export default postProducts;