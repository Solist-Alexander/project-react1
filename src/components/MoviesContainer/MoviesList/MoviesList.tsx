import React, {useEffect, useState} from 'react';
import {movieService} from "../../../services/movieService";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";
import {IMovie, IMovieInfo} from "../../../interfaces /movieInterface";
import style from './MoviesList.module.css'
import PaginationForMovie from "../../PaginationForMovie/PaginationForMovie";

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'


    useEffect(()=>{
        movieService.getAll(currentPage).then(({data})=> {
            setMovies(data.results)
        })
    },[query])


    return (
        <div className={style.moviesListCardDiv}>
            {movies.map(movie => <MoviesListCard key={movie?.id} movie={movie} />)}
            <div className={style.PaginationForMovieDiv}>
                <PaginationForMovie/>
            </div>

        </div>
    );
};

export default MoviesList;