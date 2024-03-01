import React, {useEffect, useState} from 'react';
import {IMovie} from "../../interfaces /movieInterface";
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import style from "../MoviesContainer/MoviesList/MoviesList.module.css";
import MoviesListCard from "../MoviesContainer/MoviesListCard/MoviesListCard";
import PaginationForMovie from "../PaginationForMovie/PaginationForMovie";
import {useForm} from "react-hook-form";
import {searchService} from "../../services/searchService";

const SearchList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: "all"
    })

    useEffect(() => {
        movieService.getAll(currentPage).then(({data}) => {
            setMovies(data.results)
        })
    }, [query])

    const search = async (formData: any) => {
        await searchService.getAll(formData.query, currentPage).then(({data}) => setMovies(data.results))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'Поиск'} name="query" className={style.inputSearch}/>
            </form>

            <div className={style.moviesListCardDiv}>
                {movies.map(movie => <MoviesListCard key={movie?.id} movie={movie}/>)}
            </div>
            <div className={style.PaginationForMovieDiv}>
                <PaginationForMovie/>
            </div>

        </div>
    );
};

export default SearchList;