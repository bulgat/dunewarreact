import { HOST_SERVER } from '../environment'
import axios from 'axios'

axios.interceptors.response.use(
    response => {

        console.log(response," 11 ????? d token =" )
        return response;
    },
    error => {
        console.log(" o list", error.message)
        if (error.response && error.response.status === 403) {
            // ƒействие: показать сообщение, перенаправить
            console.error("Ќет прав доступа (403)");
            window.location.href = '/auth-error'; // или использование react-router
        }
        if (error.message === 'Network Error') {
            // ƒействие: показать сообщение, перенаправить
            console.error("Ќет прав доступа (401)");
            window.location.href = '/auth-error'; // или использование react-router
        }
        return Promise.reject(error);
    }
);

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
});


const InterceptorAxiosService = () => {
    return {

    }

}
 
export { InterceptorAxiosService };