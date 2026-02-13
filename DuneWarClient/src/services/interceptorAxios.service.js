import { HOST_SERVER } from '../environment'
import axios from 'axios'

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 403) {
            // ƒействие: показать сообщение, перенаправить
            console.error("Ќет прав доступа (403)");
            window.location.href = '/auth-error'; // или использование react-router
        }
        return Promise.reject(error);
    }
);

const InterceptorAxiosService = () => {
    return {

    }

}
 
export { InterceptorAxiosService };