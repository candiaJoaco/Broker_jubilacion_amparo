import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // en producción cambia a la URL real del backend si hace falta
  timeout: 10000
})

export default api