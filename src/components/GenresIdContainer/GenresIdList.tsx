import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks /useAppLocation";
import {IMovie} from "../../interfaces /movieInterface";
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import MoviesListCard from "../MoviesContainer/MoviesListCard/MoviesListCard";
import style from "../MoviesContainer/MoviesList/MoviesList.module.css";

const GenresIdList = () => {
    const [movies, setMovies] = useState<IMovie[] >([])
    const {id} = useParams();

    useEffect(() => {
    if (id) {
            movieService.getGenresByID(+id).then(({ data }) => setMovies(data.results));
        }
}, [id]);
    return (
        <div className={style.moviesListCardDiv}>
            {movies.map(movie => <MoviesListCard key={movie?.id} movie={movie} />)}
        </div>
    );
};

export default GenresIdList;