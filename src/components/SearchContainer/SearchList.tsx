import React, {ChangeEvent, useEffect, useState} from 'react';

import {useSearchParams} from "react-router-dom";
import style from "../MoviesContainer/MoviesList/MoviesList.module.css";
import {useForm} from "react-hook-form";
import {IMovie} from "../../interfaces ";
import {searchService} from "../../services";
import {MoviesListCard} from "../MoviesContainer";
import {PaginationForSearch} from "../Paginations";

const SearchList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [result, setResult] = useState<IMovie[]>([])
    const [isFormActive, setIsFormActive] = useState<boolean>(false);

    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'
    const currentQuery = query.get('query') ? query.get('query') : ''
    const { reset, handleSubmit} = useForm()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery({ query: event.target.value, page: '1' });

    };


    useEffect(()=>{
        const moviesFilter = movies.filter((result) =>{
            result.title.toLowerCase().includes(currentQuery.toLowerCase())
            setMovies(moviesFilter)
        })
    },[currentQuery, movies])


    useEffect(()=>{
        searchService.getAll(currentQuery, currentPage).then(({data})=>  setResult(data.results))
    },[currentPage])




    const search = async (formData: any) => {
        await searchService.getAll(currentQuery, currentPage).then(({data}) => {
            setResult(data.results)
            setIsFormActive(true);
            reset()
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)} >
                <input type="text" placeholder={'Поиск'} name="query" className={style.inputSearch} onChange={handleInputChange}/>
            </form>

            <div className={style.moviesListCardDiv}>
                {result.map(movie => <MoviesListCard key={movie?.id} movie={movie}/>)}
            </div>
            <div className={style.PaginationForMovieDiv}>
                {isFormActive && <PaginationForSearch/>}
            </div>

        </div>
    );
};

export  {SearchList};