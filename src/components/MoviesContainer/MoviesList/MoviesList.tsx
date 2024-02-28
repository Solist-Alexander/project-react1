import React, {useEffect, useState} from 'react';
import {movieService} from "../../../services/movieService";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";
import {IMovie, IMovieInfo} from "../../../interfaces /movieInterface";
import style from './MoviesList.module.css'

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'


    useEffect(()=>{
        movieService.getAll(currentPage).then(({data})=> {
            setMovies(data.results)
        })
    },[query])

    const next = () => {
        const nextPage = +currentPage + 1;
        setQuery({ page: nextPage.toString() });
    }

    const prev = () => {
        if (+currentPage > 1) {
            const prevPage = +currentPage - 1;
            setQuery({ page: prevPage.toString() });
        }
    }
    return (
        <div className={style.moviesListCardDiv}>
            {movies.map(movie => <MoviesListCard key={movie?.id} movie={movie} />)}
            <button  onClick={prev}>prev</button>
            <button  onClick={next}>next</button>
        </div>
    );
};

export default MoviesList;