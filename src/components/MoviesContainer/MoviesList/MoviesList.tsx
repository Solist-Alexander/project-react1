import React, {useEffect, useState} from 'react';
import {movieService} from "../../../services/movieService";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";
import {IMovie, IMovieInfo} from "../../../interfaces /movieInterface";
import style from './MoviesList.module.css'

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(()=>{
        movieService.getAll().then(({data})=> setMovies(data.results))
    },[])
    return (
        <div className={style.moviesListCardDiv}>
            {movies.map(movie => <MoviesListCard key={movie?.id} movie={movie} />)}
        </div>
    );
};

export default MoviesList;