import axios from 'axios';
import reduxStore from './redux';

// require('dotenv').config();

// import config from './config';

const instance = axios.create({
    baseURL: 'http://localhost:5000'
    //     withCredentials: true
    // process.env.REACT_APP_BACKEND_URL
});

//Cho phép server lấy cookie
instance.defaults.withCredentials = true


let abc = localStorage.getItem('persist:user');
let token = JSON.parse(abc).tokenRedux;

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;



instance.interceptors.response.use(
    (response) => {
        // const { data } = response;
        return response.data
    }, function (err) {

        const status = err && err.response && err.response.status || 500;
        console.log(status)

        switch (status) {
            // authentication (token related issues)
            case 401: {

                return Promise.reject(err);
            }

            // forbidden (permission related issues)
            case 403: {
                return Promise.reject(err)
            }

            // bad request
            case 400: {

                return Promise.reject(err)
            }

            // not found
            case 404: {
                return Promise.reject(err)
            }

            // conflict
            case 409: {
                return Promise.reject(err)
            }

            // unprocessable
            case 422: {
                return Promise.reject(err)
            }

            // generic api error (server related) unexpected
            default: {
                return Promise.reject(err)
            }
        }




    }
)

export default instance;