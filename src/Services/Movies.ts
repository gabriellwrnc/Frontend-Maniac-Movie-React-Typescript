import { Movie } from "../Types/Movies"
import { AxiosResponse } from "axios";
import { httpRequestMovie } from "./Api";

const apiKey = process.env.REACT_APP_API_KEY;

export const getPopularMovies = async (): Promise<AxiosResponse<Movie>> => {
    const response = await httpRequestMovie.get('/movie/popular?api_key=' + apiKey + '&language=en-US&page=1')
    return response;
}

export const getSearchMovies = async (search: string): Promise<AxiosResponse<Movie>> => {
    const response = await httpRequestMovie.get('/search/movie?api_key=' + apiKey + '&language=en-US&query=' + search + '&page=1')
    return response;
}