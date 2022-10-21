const axios = require( 'axios' );
const baseURL = 'https://pre-entrega.herokuapp.com';

const getProductsInCarrito = async( carritoId = 1 ) => {

  const apiUrl = `${ baseURL }/api/carrito/${ carritoId }/productos`;

  const results = await axios.get( apiUrl );
  const { data } = results;
  return data;

}

export default getProductsInCarrito;