import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IRes} from "../types/responseType";
import {IMovieInfo, IMovie} from "../interfaces /movieInterface";

const movieService = {
    getAll: (page:string|null = '1'): IRes<IMovieInfo> => apiService.get(urls.movie.base, {params: {page}}),
    getById:(id:number): IRes<IMovie> => apiService.get(urls.movie.byId(id)),
    getGenresByID:(id:number, page:string|null = '1'):IRes<IMovieInfo> => apiService.get(urls.movie.genresByID(id),{params: {page}})
}


export {
    movieService
}