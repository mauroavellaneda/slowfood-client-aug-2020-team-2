import axios from 'axios'

const getProducts = async() => {
  let response = await axios.get('/products')
  return response.data.products
}

export { getProducts };