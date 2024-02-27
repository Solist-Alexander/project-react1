import React, {useEffect, useState} from 'react';
import {IGenre} from "../../../interfaces /genreInterface";
import {genreService} from "../../../services/genreService";
import Genre from "../Genre/Genre";
import style from './GenresList.module.css'

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

export default GenresList;