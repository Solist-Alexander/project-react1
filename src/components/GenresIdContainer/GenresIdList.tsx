import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import style from './GenresIdList.module.css'
import {IMovie} from "../../interfaces ";
import {movieService} from "../../services";
import {MoviesListCard} from "../MoviesContainer";
import {PaginationForMovie} from "../Paginations";

const GenresIdList = () => {
    const [movies, setMovies] = useState<IMovie[]| null>(null);
    const {genreId} = useParams();
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'

    useEffect(() => {
        if (genreId) {
            movieService.getGenresByID(+genreId, currentPage).then(({data}) => setMovies(data.results));
        }
    }, [genreId, query]);


    return (
        <div >
            <div className={style.moviesListCardDiv} >
                {movies && movies.map(movie => <MoviesListCard key={movie?.id} movie={movie} />)}
            </div>
            <div className={style.PaginationForMovieDiv}>
                {movies && <PaginationForMovie />}
            </div>
        </div>
    );
};

export  {GenresIdList};