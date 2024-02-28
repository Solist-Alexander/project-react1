import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks /useAppLocation";
import {IMovie} from "../../interfaces /movieInterface";
import {useParams, useSearchParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import MoviesListCard from "../MoviesContainer/MoviesListCard/MoviesListCard";
import style from './GenresIdList.module.css'
import PaginationForMovie from "../PaginationForMovie/PaginationForMovie";

const GenresIdList = () => {
    const [movies, setMovies] = useState<IMovie[] >([])
    const {genreId} = useParams();
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'

    useEffect(() => {
    if (genreId) {
            movieService.getGenresByID(+genreId, currentPage).then(({ data }) => setMovies(data.results));
        }
}, [genreId, query]);



    return (
        <div className={style.moviesListCardDiv}>
            {movies.map(movie => <MoviesListCard key={movie?.id} movie={movie} />)}
            <div className={style.PaginationForMovieDiv}>
                <PaginationForMovie/>
            </div>
        </div>
    );
};

export default GenresIdList;