import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks /useAppLocation";
import {IMovie} from "../../interfaces /movieInterface";
import {useParams, useSearchParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import MoviesListCard from "../MoviesContainer/MoviesListCard/MoviesListCard";
import style from "../MoviesContainer/MoviesList/MoviesList.module.css";

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

export default GenresIdList;