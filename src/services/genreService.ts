import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IRes} from "../types/responseType";
import {IGenres} from "../interfaces /genreInterface";

const genreService = {
    getAll:(): IRes<IGenres> => apiService.get(urls.genre.base)
}

export {
    genreService
}

export {

}