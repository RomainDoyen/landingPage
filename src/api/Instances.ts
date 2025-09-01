import axios from "axios";

export const key = import.meta.env.VITE_RAWG_API_KEY;

const axiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// Intercepteur pour ajouter la clé API comme paramètre de requête
axiosInstance.interceptors.request.use((config) => {
    if (key) {
        config.params = { ...config.params, key };
    } else {
        console.warn("VITE_RAWG_API_KEY n'est pas définie dans le fichier .env");
    }
    return config;
});

export default axiosInstance;