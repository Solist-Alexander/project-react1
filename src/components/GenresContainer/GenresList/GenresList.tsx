import React, {useEffect, useState} from 'react';
import style from './GenresList.module.css'
import {IGenre} from "../../../interfaces ";
import {genreService} from "../../../services";
import {Genre} from "../index";

const GenresList = () => {
    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(()=>{
        genreService.getAll().then(({data})=> setGenres(data.genres))
    },[])

    return (
        <div className={style.genreListContainer}>
            {genres.map(genre =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export  {GenresList};