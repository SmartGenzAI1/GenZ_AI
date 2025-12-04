import axios from 'axios'

// Default client — change BASE_URL to point to your FastAPI backend if deployed.
const BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

const client = axios.create({ baseURL: BASE_URL, timeout: 10000 })

export default client
