import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import {Rating} from "@mui/material";
import style from './MovieDetails.module.css'
import {useNavigate} from "react-router-dom";
import {IGenre, IMovie} from "../../../interfaces ";
import {genreService} from "../../../services";
import {MovieDetailsGenres} from "./MovieDetailsGenres";

interface IProps extends PropsWithChildren {
    moviesDetails: IMovie
}

const MovieDetails: FC<IProps> = ({moviesDetails}) => {
    const {id, genre_ids, vote_average, original_language, title, poster_path, overview, release_date} = moviesDetails
    const [genres, setGenres] = useState<IGenre[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        genreService.getAll().then(({data}) => {
            const filteredGenres = data.genres.filter(genre => genre_ids.includes(genre.id));
            setGenres(filteredGenres);
        });


    }, [])

    return (
        <div>
            <div className={style.movieDetailsContainer}>
                <div>
                    {poster_path ? (
                        <img className={style.img} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title}`}/>
                    ) : (
                        <img  src="https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png" alt="No poster"/>
                    )}
                </div>
                <div className={style.movieInfoDiv}>
                    <p><b>Original Title:</b> {title}</p>
                    <p><b>Original Language: :</b> {original_language}</p>
                    <p><b>Vote Average:</b></p>
                    <Rating name="customized-10" defaultValue={vote_average} max={10} precision={0.5}
                            style={{fontSize: "35px"}}/>
                    <p><b>Overview:</b> {overview}</p>
                    <p><b>Release Date:</b> {release_date}</p>
                    <p><b>Genres:</b></p>
                    <div className={style.genresContainer}>
                        {genres.map(genre => <MovieDetailsGenres genre={genre} key={genre.id}/>)}
                    </div>
                </div>

            </div>

            <button onClick={() => navigate(-1)} className={style.buttonBack}>back</button>
        </div>
    );
};

export  {MovieDetails};