import axios from "axios";

export const httpRequestMovie = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

export const httpRequestImages = axios.create({
    baseURL: process.env.REACT_APP_API_IMAGES_URL,
})