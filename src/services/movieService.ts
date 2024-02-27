import {movieApiService} from "./apiService";
import {urls} from "../constans/urls";
import {IRes} from "../types/responseType";
import {IMovieInfo, IMovie} from "../interfaces /movieInterface";

const movieService = {
    getAll: (page = '1'): IRes<IMovieInfo> => movieApiService.get(urls.movie.base, {params: {page}}),
    getById:(id:number): IRes<IMovie> => movieApiService.get(urls.movie.byId(id)),
    getGenresByID:(id:number):IRes<IMovieInfo> => movieApiService.get(urls.movie.genresByID(id))
}


export {
    movieService
}