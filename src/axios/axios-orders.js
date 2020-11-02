import axios from 'axios'

const instance = axios.create({
  baseURL:'https://burgerbuilder-1697a.firebaseio.com/'
});

export default instance;