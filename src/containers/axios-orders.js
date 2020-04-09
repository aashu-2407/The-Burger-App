import axios from 'axios';

const instance =  axios.create({
    baseURL : 'https://react-burger-app-e1372.firebaseio.com/'

})

export default instance;