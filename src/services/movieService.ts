import {movieApiService} from "./apiServices";
import {urls} from "../constans/urls";
import {IRes} from "../types/responseType";
import {IMovieInfo} from "../interfaces /movieInterface";

const movieService = {
    getAll: (page = '1'): IRes<IMovieInfo[]> => movieApiService.get(urls.movie.base, {params: {page}}),
}


export {
    movieService
}