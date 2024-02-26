const baseURL = process.env.REACT_APP_MOVIES_API

const movies = '/discover/movie'
const genres = '/genre/movie/list'

const urls = {
    movie:{
        base: movies
    },
    genre:{
        base: genres
    }
}
export {
    baseURL,
    urls
}
