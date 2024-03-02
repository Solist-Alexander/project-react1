import React, {FC, PropsWithChildren, useState} from 'react';
import {IMovie} from "../../../interfaces /movieInterface";
import {Rating, Typography} from "@mui/material";
import style from './MovieDetails.module.css'
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    moviesDetails: IMovie
}

const MovieDetails: FC<IProps> = ({moviesDetails}) => {
    const {id, vote_average,original_language, title, genre_ids, poster_path, overview, release_date} = moviesDetails
    const navigate = useNavigate()
    return (
        <div>
            <div className={style.movieDetailsContainer}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title}`}/>
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
                    {}
                </div>

            </div>

            <button onClick={() => navigate(-1)} className={style.buttonBack}>back</button>
        </div>
    );
};

export default MovieDetails;