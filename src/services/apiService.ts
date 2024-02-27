import axios from "axios";
import {baseURL} from "../constans/urls";

const movieApiService =  axios.create({baseURL,   headers: {
        accept: 'application/json',
        Authorization:  `Bearer ${process.env.REACT_APP_API_KEY}`
    }})
const genreApiService = axios.create({baseURL, headers: {
        accept: 'application/json',
        Authorization:  `Bearer ${process.env.REACT_APP_API_KEY}`
    }})


export {
    movieApiService,
    genreApiService
}