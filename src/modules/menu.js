import axios from 'axios'

const getData = async() => {
  let response = await axios.get('/products')
  return response.data.products
}

export { getData };