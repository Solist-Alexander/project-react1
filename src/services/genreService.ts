import {urls} from "../constans";
import {apiService} from "./apiService";
import {IGenres} from "../interfaces ";
import {IRes} from "../types";

const genreService = {
    getAll:(): IRes<IGenres> => apiService.get(urls.genre.base)
}

export {
    genreService
}

