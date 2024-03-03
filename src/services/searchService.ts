import {apiService} from "./apiService";
import {urls} from "../constans";
import {IRes} from "../types";
import {IMovieInfo} from "../interfaces ";

const searchService = {
    getAll:(query:string, page:string|null = '1'):IRes<IMovieInfo> => apiService.get(urls.search.base(query), {params: {page}})
}

export {
    searchService
}