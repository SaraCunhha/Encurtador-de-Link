import axios from "axios"

export const key ="c366344e4f1a2c10868fd0914b6cd886ef92d58e"


const api = axios.create({
baseURL: 'https://api-ssl.bitly.com/v4',
headers:{
    'Authorization': `Bearer ${key}`
}
})


export default api;
