import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-87db2.firebaseio.com/'
});

export default instance;