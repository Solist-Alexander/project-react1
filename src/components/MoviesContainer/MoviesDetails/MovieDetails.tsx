import React, {FC, PropsWithChildren, useState} from 'react';
import {IMovie} from "../../../interfaces /movieInterface";
import {Rating, Typography} from "@mui/material";
import style from './MovieDetails.module.css'
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    moviesDetails: IMovie
}

const MovieDetails: FC<IProps> = ({moviesDetails}) => {
    const {id, vote_average, title, genre_ids, poster_path, overview} = moviesDetails
    // const [value, setValue] = useState<number | null>(2);
    const navigate = useNavigate()

    return (
        <div className={style.movieDetailsContainer}>
            <button onClick={() => navigate(-1)} className={style.buttonBack}>back</button>
            <p>{title}</p>
            <div className={style.imgAndInfoDiv}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title}`}/>

                </div>
                <div>
                    <Rating name="customized-10" defaultValue={vote_average} max={10} precision={0.5} style={{ fontSize: "45px"}}/>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;