const baseURL = process.env.REACT_APP_MOVIES_API

const movies = '/discover/movie'
const movie = '/movie'
const genres = '/genre/movie/list'

const urls = {
    movie:{
        base: movies,
        byId:(id:number) => `${movie}/${id}`,
        genresByID:(id:number) => `${movies}?with_genres=${id}`
    },
    genre:{
        base: genres
    }
}
export {
    baseURL,
    urls
}
