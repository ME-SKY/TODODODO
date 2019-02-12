import axios from 'axios'

const todos = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

todos.interceptors.response.use(
    config => config,
    (error) => {
        if (error.response.status === 408 || error.code === 'ECONNABORTED') {
            console.log(`A timeout happend on url ${error.config.url}`)
        }
        return Promise.reject(error);
    },
);

const todosApi = {
    getTodos: function (startPoint){
       return todos.get(`/todos?_start=${startPoint}&_limit=10`)
            .then(response =>response.data)
            .catch(error => {
                console.log('-----error-------');
                throw error;
            })
}}

export default todosApi