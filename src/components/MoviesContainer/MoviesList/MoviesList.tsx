import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import style from './MoviesList.module.css'
import {PaginationForMovie} from "../../Paginations";
import {MoviesListCard} from "../MoviesListCard";
import {IMovie} from "../../../interfaces ";
import {movieService} from "../../../services";

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]| null>(null)
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'


    useEffect(()=>{
        movieService.getAll(currentPage).then(({data})=> {
            setMovies(data.results)
        })
    },[query])


    return (
        <div >
            <div className={style.moviesListCardDiv}>
                {movies && movies.map(movie => <MoviesListCard key={movie?.id} movie={movie} />)}
            </div>
            <div className={style.PaginationForMovieDiv}>
                {movies && <PaginationForMovie/>}
            </div>
        </div>
    );
};

export  {MoviesList};