import React, {FC, PropsWithChildren} from 'react';

import style from './MoviesListCard.module.css'
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../../../interfaces ";
import {useTheme} from "../../../hoc";

interface IProps extends PropsWithChildren {
    movie: IMovie

}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, vote_average, title, poster_path} = movie
    const navigate = useNavigate()
    const { darkTheme } = useTheme();

    return (
        <div className={`${style.moviesListCard} ${darkTheme ? style.moviesListCardDark : style.moviesListCardLight}`}>
            <button onClick={() => navigate(`/movies/${id}`, {state: {movie}})}>
                {poster_path ? (
                    <img className={style.moviesPosterImg} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title}`}/>
                ) : (
                    <img className={style.moviesPosterImg} src="https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png" alt="No poster"/>
                )}

                <div><Rating name="customized-10" value={vote_average} max={10} precision={0.5} readOnly/></div>
                <p>{title}</p>
            </button>
        </div>
    );
};

export  {MoviesListCard};