import React, {useEffect, useState} from 'react';
import {movieService} from "../../../services/movieService";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";
import {IMovie, IMovieInfo} from "../../../interfaces /movieInterface";

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovieInfo[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(()=>{
        movieService.getAll().then(({data})=> setMovies(data))
    },[])
    console.log(movies)
    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.results?.id} movie={movie.results} />)}
        </div>
    );
};

export default MoviesList;