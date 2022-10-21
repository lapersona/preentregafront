const axios = require( 'axios' );
const baseURL = 'https://pre-entrega.herokuapp.com';

const deleteProduct = async( productId ) => {

  const apiUrl = `${ baseURL }/api/productos/${ productId }`;
  let config = {
    headers: {
      admin: true
    }
  }

  axios.delete( apiUrl, config )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );
}

export default deleteProduct;